MechBot
MechBot is an AI-powered chatbot built with React.js and Node.js, leveraging OpenAI's GPT-3.5 model to provide intelligent responses to user queries.

Table of Contents
Features
Prerequisites
Installation
Usage
Project Structure
Technologies Used
Contributing
License
Contact
Features
Real-time chat interface
AI-powered responses using OpenAI's GPT-3.5 model
Responsive design with Tailwind CSS
Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js (v14.0.0 or later)
npm (v6.0.0 or later)
An OpenAI API key
Installation
Clone the repository:

Copy
git clone https://github.com/yourusername/mechbot.git
cd mechbot
Backend setup:

Copy
cd backend
npm install
Create a .env file in the backend directory and add your OpenAI API key:

Copy
OPENAI_API_KEY=your_api_key_here
PORT=5001
Frontend setup:

Copy
cd ../frontend
npm install
Usage
Start the backend server:

Copy
cd backend
npm start
The server will start on http://localhost:5000
In a new terminal, start the frontend development server:

Copy
cd frontend
npm start
The application will open in your default browser at http://localhost:3000
Start chatting with MechBot in the user interface!
Project Structure

mechbot/
├── backend/
│   ├── config/
│   │   └── open-ai.js
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatWindow.js
│   │   │   └── MessageInput.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md

Technologies Used

Frontend:
React.js
Axios
Tailwind CSS

Backend:
Node.js
Express.js
OpenAI API

Contact
Gideon Habwe email: gmarkd@hotmail.com

Project Link: https://github.com/zhabwe254/Mechbot2
