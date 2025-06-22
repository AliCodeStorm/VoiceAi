import { config } from "dotenv";
config();

export const port=process.env.PORT;
export const genAi=process.env.GEMINI_API_KEY;