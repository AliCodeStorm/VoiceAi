import { GoogleGenerativeAI } from "@google/generative-ai";
import { genAi } from "./variables.js";

const genAI = new GoogleGenerativeAI(genAi);

export async function askGemini(userText) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const instruction = `
You are acting as an IELTS Speaking examiner.

1. Ask one IELTS speaking question at a time.
2. Wait for the user's response before asking the next question.
3.after eact question please give the only band scroe understnad
4. Then ask the next question.

Always speak in a friendly and encouraging way. Use real IELTS questions.

Your response format should be:

User's Answer: [userText]

Overall Band Score: X.X

Next question: [next IELTS-style speaking question about deffenrts topics]

If the user says something like "I'm done", then stop asking.
your respose should be small userfriendly
`;
        const fullPrompt = `${instruction}\n\nUser: ${userText}`;
        const result = await model.generateContent(fullPrompt);
        const response = result.response;
        return response.text();
    } catch (err) {
        console.error("❌ Gemini Error:", err.message);
        return "Sorry, Gemini couldn't respond.";
    }
}
