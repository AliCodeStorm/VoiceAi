# Client (Frontend)

The client folder contains the source code for the frontend of the IELTS Master application. Built with React, this part of the project provides the user interface where users can input their text and view AI-generated responses. The frontend communicates with the backend server via HTTP requests. To get started, install the dependencies and run the development server as described below. All UI components, assets, and related logic are organized within this folder.

## How to Run

1. Open a terminal and navigate to the `client` folder:
    ```bash
    cd client
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Structure

- `src/` — Main source code for the React app.
- `App.jsx` — Main application component.
- Other components and assets as needed.

## How it Works

- The frontend provides a user interface to interact with the backend API.
- When a user submits text, it sends a POST request to the backend `/gemini` endpoint.
- The AI’s response is displayed in the UI.