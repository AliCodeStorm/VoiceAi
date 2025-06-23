# IELTS Master

This project is a full-stack web application designed to help users prepare for the IELTS exam. It consists of two main parts: a React-based frontend (client) and a Node.js/Express backend (server). The backend provides an API that leverages Gemini AI to generate responses, while the frontend offers an interactive user interface for communication with the backend. This repository contains all the code and instructions needed to run both the client and server locally.

## Project Structure

```
ielts-master/
│
├── client/   # React frontend
│
└── server/   # Express backend
```

---

## How to Run the Project

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd ielts-master
```

### 2. Start the Backend (Server)

```bash
cd server
npm install
npm run dev
```

- The backend runs on [http://localhost:3000](http://localhost:3000) by default.
- Make sure to set up a `.env` file with your environment variables (see `server/README.md`).

### 3. Start the Frontend (Client)

```bash
cd ../client
npm install
npm start
```

- The frontend runs on [http://localhost:5173](http://localhost:5173) (or another port if configured).

---

## Project Flow

1. **User** interacts with the frontend (client).
2. The frontend sends requests to the backend (server) API.
3. The backend processes the request, communicates with Gemini AI, and sends a response.
4. The frontend displays the AI’s response to the user.

---

For more details, see the `README.md` files in the `client` and `server` folders.
