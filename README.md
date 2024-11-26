Hello World API
This project consists of two main parts:

Node.js API: A simple backend that returns a greeting message based on a language query parameter.
React.js Frontend: A user interface that allows users to select a language and displays the corresponding greeting message from the backend.
Features
API endpoints to return "Hello world" in multiple languages (English, French, Hindi).
React.js frontend to interact with the API and display the greeting based on the selected language.
A simple, responsive UI with language selection and dynamic greeting display.
Technologies Used
Backend: Node.js, Express.js
Frontend: React.js
HTTP Requests: Axios
Installation Instructions
Step 1: Set up the Backend (Node.js API)
Clone or download this repository to your local machine.

Navigate to the backend folder (hello-world-api) and install the dependencies:

cd hello-world-api
npm install
Start the backend server:

node server.js
The API will now be running at http://localhost:5000.

You can test the API by visiting the following URLs in your browser:

http://localhost:5000/hello?language=English → "Hello world"
http://localhost:5000/hello?language=French → "Bonjour le monde"
http://localhost:5000/hello?language=Hindi → "Namastey sansar"
Step 2: Set up the Frontend (React.js)
Navigate to the hello-world-app directory:

cd hello-world-app
Install the necessary dependencies (Axios for making HTTP requests):

npm install
Start the React frontend:

npm start
The frontend will open in your browser at http://localhost:3000.

API Usage
The backend API accepts a query parameter language and returns the corresponding greeting.

API Endpoints:
GET /hello?language=English

Response: Hello world
GET /hello?language=French

Response: Bonjour le monde
GET /hello?language=Hindi

Response: Namastey sansar
