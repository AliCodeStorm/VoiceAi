import express from "express";
import cors from "cors";
import { askGemini } from "./config/gmini.js";
import { port } from "./config/variables.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/gemini", async (req, res) => {
  try {
    const userText = req.body.text;
    console.log("🎙️ User said:", userText);

    const aiReply = await askGemini(userText);
    res.json({ reply: aiReply });
  } catch (err) {
    console.error("❌ Error:", err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
