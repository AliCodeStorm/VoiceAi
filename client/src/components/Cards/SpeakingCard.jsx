import React, { useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function SpeakingCard() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [reply, setReply] = useState("");
  const recognitionRef = useRef(null);
  const finalTranscriptRef = useRef("");

  const toggleSpeechRecognition = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }

    if (isRecording) {
      // 🔇 Stop if already recording
      recognitionRef.current?.stop();
      return;
    }

    // 🎙️ Setup
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
    finalTranscriptRef.current = "";
    recognitionRef.current = recognition;

    recognition.onstart = () => {
      setIsRecording(true);
      setTranscript("");
      setReply("");
    };

    recognition.onresult = (event) => {
      let interim = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const text = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscriptRef.current += text + " ";
        } else {
          interim += text;
        }
      }
      setTranscript(finalTranscriptRef.current + interim);
    };

    recognition.onerror = (event) => {
      console.error("Speech Recognition Error:", event.error);
      setIsRecording(false);
    };

    recognition.onend = async () => {
      setIsRecording(false);
      const finalText = finalTranscriptRef.current.trim();
      if (!finalText) return;

      try {
        const res = await fetch("http://localhost:3000/gemini", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: finalText }),
        });
        const data = await res.json();
        setReply(data.reply);
        speak(data.reply);
      } catch (error) {
        console.error("❌ Backend Error:", error.message);
      }
    };

    recognition.start();
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="w-full flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
        <CardHeader className="bg-blue-600 dark:bg-blue-800 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <div>
              <CardTitle className="text-white text-xl font-bold">IELTS Speaking Practice</CardTitle>
              <CardDescription className="text-blue-100">Your personal AI speaking system</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            How can I help you today? Speak naturally and I'll respond.
          </p>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 min-h-32 flex items-center justify-center">
            <button
              onClick={toggleSpeechRecognition}
              className={`flex items-center justify-center p-4 ${
                isRecording ? "bg-red-500" : "bg-blue-500"
              } hover:opacity-90 rounded-full text-white`}
            >
              {isRecording ? (
                <span className="animate-pulse">🎙️ Stop</span>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              )}
            </button>
          </div>

          {transcript && (
            <p className="text-sm text-gray-600 dark:text-gray-300">🗣️ You said: {transcript}</p>
          )}
          {reply && (
            <p className="text-sm text-blue-600 dark:text-blue-300">🤖 AI says: {reply}</p>
          )}
        </CardContent>

        <CardFooter className="bg-gray-50 dark:bg-gray-700/50 p-4 flex justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">Tap to toggle microphone</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SpeakingCard;
