# Web UI Application with Flask Backend and React Frontend

## Project Overview

This project is a full-stack web application that consists of a Flask backend API and a React frontend interface. The application provides a simple record management system with the ability to execute system commands through the web interface.

### Features

- **Record Management**: Create, read, and delete records
- **Search Functionality**: Filter records by name
- **Command Execution**: Run system commands through the web interface
- **Modern UI**: Clean and responsive user interface

## Architecture

### Backend (Flask)

The backend is built with Flask and provides the following endpoints:

- `GET /records`: Retrieve all records (with optional search parameter)
- `POST /records`: Create a new record
- `DELETE /records/<id>`: Delete a record by ID
- `POST /run-command`: Execute a system command

### Frontend (React)

The frontend is built with React and includes the following components:

- `App`: Main application component
- `RecordForm`: Form for adding new records
- `RecordList`: Display and manage existing records
- `CommandRunner`: Interface for executing system commands

## Setup and Installation

### Prerequisites

- Python 3.6+
- Node.js 14+
- npm 6+

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies (if using a virtual environment, activate it first):
   ```
   pip install flask flask-cors
   ```

3. Start the Flask server:
   ```
   python app.py
   ```

   The backend server will run on http://127.0.0.1:5001

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the React development server:
   ```
   npm start
   ```
   
   If you encounter issues with react-scripts, install it as a dev dependency:
   ```
   npm install --save-dev react-scripts
   ```
   
   Then start the server with:
   ```
   npx react-scripts start
   ```

   The frontend will be available at http://localhost:3000

## Usage

1. **Adding Records**: Enter a record name and click "Add"
2. **Searching Records**: Type in the search box to filter records
3. **Deleting Records**: Click the "Delete" button next to a record
4. **Running Commands**: Enter a command in the command input and click "Run"

## Technologies Used

- **Backend**: Flask, Python
- **Frontend**: React, JavaScript, CSS
- **API Communication**: Axios
- **Styling**: Custom CSS

## Project Structure

```
task-3/
├── backend/
│   └── app.py
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── ...
│   └── src/
│       ├── components/
│       │   ├── CommandRunner.js
│       │   ├── RecordForm.js
│       │   └── RecordList.js
│       ├── App.js
│       ├── App.css
│       ├── api.js
│       └── index.js
└── README.md
```