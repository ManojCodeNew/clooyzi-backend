Clooyzi Backend

Contact Form Backend using Node.js, Express, and MongoDB

This project is a backend API for handling contact form submissions. It stores user details such as name, email, phone, company, and message into a MongoDB database.
The backend is built with Express.js and Mongoose, with validation using express-validator and environment variables managed via dotenv.

🚀 Features

RESTful API with POST /api/contact endpoint

Data stored securely in MongoDB Atlas

Input validation with express-validator

Environment variables managed in .env (not pushed to GitHub)

Clean architecture with routes, controllers, and models

🛠️ Tech Stack

Node.js

Express.js

MongoDB + Mongoose

dotenv

express-validator

📂 Project Structure
backend/
│── src/
│   ├── models/        # Mongoose schemas
│   ├── controllers/   # Route logic
│   ├── routes/        # Express routes
│   └── config/        # Database connection
│── .env               # Environment variables (not in repo)
│── .gitignore         # Ignored files (node_modules, .env, etc.)
│── package.json       
│── README.md          

⚙️ Installation & Setup

Clone the repo

git clone https://github.com/ManojCodeNew/clooyzi-backend.git
cd clooyzi-backend


Install dependencies

npm install


Create .env file in root with your own values:

MONGO_URI=your_mongodb_connection_string
PORT=5000


Run the server

npm run dev   # with nodemon (development)
npm start     # production

📮 API Endpoint
➤ POST /api/contact

Request Body (JSON):

{
  "name": "Manoj",
  "email": "manoj@example.com",
  "phone": "9876543210",
  "company": "LocalShopConnect",
  "message": "Testing contact form"
}


Successful Response:

{
  "message": "Contact saved",
  "contact": {
    "_id": "6521e8f67b4a23e1a1234567",
    "name": "Manoj",
    "email": "manoj@example.com",
    "phone": "9876543210",
    "company": "LocalShopConnect",
    "message": "Testing contact form",
    "createdAt": "2025-10-06T12:34:56.789Z",
    "__v": 0
  }
}

📝 Notes

Keep your .env file private (it’s ignored via .gitignore).

Share environment variables using a .env.example file for setup.

Use Thunder Client
 or Postman for API testing.