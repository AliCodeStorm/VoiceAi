# Server (Backend)

The server folder contains the backend code for the IELTS Master application. This is a Node.js application using the Express framework to handle API requests from the frontend. The backend processes user input, interacts with the Gemini AI API, and returns responses to the client. Configuration files, environment variables, and route handlers are organized within this folder. Follow the instructions below to install dependencies, set up environment variables, and run the server locally.

## How to Run

1. Open a terminal and navigate to the `server` folder:
    ```bash
    cd server
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the `server` folder with the following variables:
    ```
    PORT=3000
    GEMINI_API_KEY=your_gemini_api_key_here
    ```
4. Start the server:
    ```bash
    npm run dev
    ```
    or
    ```bash
    nodemon server.js
    ```

## Structure

- `server.js` — Main Express server file.
- `config/` — Configuration files (API keys, environment variables).
- `routes/` — (If present) API route handlers.

## How it Works

- The backend exposes a `/gemini` POST endpoint.
- Receives user text from the frontend, processes it with Gemini AI, and returns the response.