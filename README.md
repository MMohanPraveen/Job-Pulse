Job Pulse - Smart Job Tracking & Exploration
A full-stack web application for job tracking and exploring real-time job opportunities.

Features
Job Tracker – Perform CRUD operations to manage job applications.
Job Explorer – Fetch and display real-time job listings via an external API.
Modern UI – Built with React.js for a smooth experience.
Backend Services – Powered by Express.js with MongoDB for data storage.

Project Structure
Job-Pulse/
│-- backend/              # Express.js Backend
│   ├── models/           # Mongoose Models
│   ├── routes/           # API Routes
│   ├── config/           # Configuration Files
│   ├── server.js         # Entry Point
│-- frontend/             # React.js Frontend
│   ├── src/              # Components & Pages
│   ├── App.js            # Main Application
│   ├── index.js          # Entry Point
│-- README.md             # Project Documentation
│-- package.json          # Dependencies
│-- .env                  # Environment Variables


Setup & Installation

1 Clone the Repository
git clone https://github.com/your-username/job-pulse.git
cd job-pulse

2️ Install Dependencies

Frontend
cd client/job_tracker
npm install

Backend
cd server
npm install

3️ Start the Backend Server

cd server
npm start
The backend runs on http://localhost:5000

4 Start the Frontend

cd client/job_tracker
npm start
The frontend runs on http://localhost:3000

API Integration

Job Tracker API (Local)
Base URL: http://localhost:5000/jobs
Endpoints:
POST /jobs – Add a job
GET /jobs – Get all jobs
PUT /jobs/:id – Update a job
DELETE /jobs/:id – Remove a job

Job Explorer API (External)
Base URL: http://localhost:5000/external-jobs
Source: Third-Party Job API
Usage: Fetch real-time job listings from an external provider.
GET /external-jobs – Get all real-time jobs

Environment Variables (.env)

Create a .env file in the backend directory:
PORT=5000
MONGO_URI=your_mongodb_connection_string
EXTERNAL_JOB_API_KEY=your_api_key

Deployment

Frontend
npm run build
Deploy the build/ folder to Vercel.

Backend
Use Render for backend deployment

Contact
Email: mohanpraveenmajji@gmail.com
GitHub: https://github.com/MMohanPraveen
