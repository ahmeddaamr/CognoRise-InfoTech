# To-do List WebApp

## Overview
This To-do List WebApp is a simple and intuitive task management tool built using the MERN stack. It allows users to add, delete, and manage tasks efficiently. The project leverages Vite for a fast development experience and incorporates both frontend and backend technologies to provide a seamless user experience.

## Features
- Add, Delete, Update, and List tasks.
- Responsive UI with Bootstrap and React Bootstrap.
- Efficient data handling using Axios for HTTP requests.
- Persistent data storage using MongoDB.

## Technologies Used
### Frontend
- **Vite**: Development environment for fast build times.
- **React**: UI library for building the user interface.
- **Axios**: Promise-based HTTP client for the browser.
- **Bootstrap**: CSS framework for responsive design.

### Backend
- **Node.js**: JavaScript runtime environment.
- **Express**: Web application framework for Node.js.
- **Mongoose**: MongoDB object modeling tool.
- **Nodemon**: Utility that automatically restarts the server when files change.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.

## Project Setup
### Frontend
1. Install the frontend dependencies:
   ```bash
   cd frontend
   npm install
    ```
2.Start the Vite development server:
  ```bash
  npm run dev
  ```

Backend:
1.Install the backend dependencies:
  ```bash
    cd backend
    npm install
```
2.Start the Node.js server:
```bash
npm start
```

### Project Structure:
### Frontend:
src/: Contains the source code for the React application.
App.jsx: Main application component.
index.js: Entry point for the React application.
public/: Contains static assets like images and the HTML template.

### Backend:
Models/: Mongoose schemas for MongoDB collections.
server.js: Entry point for the Node.js server & API operations.

API Endpoints:
GET /get/ : Retrieve all to-do items.
POST /add/ : Add a new to-do item.
UPDATE /update/:id/ : update an existing to-do item.
DELETE /delete/:id : Delete a to-do item by ID.

Usage:
Open the frontend in your browser using the Vite development server.
Use the web app to add, delete, and manage tasks.
Contributing
Contributions are welcome! Feel free to fork this repository, make improvements, and submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
Vite
React
Bootstrap
MongoDB
Express
