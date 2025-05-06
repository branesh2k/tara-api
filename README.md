# TARA API Project

## Overview
The TARA API project is a web application that provides a backend API for managing vehicle data and a frontend React application for interacting with the data. The backend is built using FastAPI and SQLAlchemy, while the frontend is built using React.

## Features
- Backend API with endpoints for creating, reading, updating, and deleting vehicle data.
- Frontend React application for displaying and managing vehicle data.
- PostgreSQL database for storing vehicle information.
- Dockerized setup for easy deployment.

## Project Structure
```
.
├── docker-compose.yml       # Docker Compose configuration
├── dockerfile               # Dockerfile for building the backend service
├── requirements.txt         # Python dependencies for the backend
├── tara_api/                # Backend FastAPI application
│   ├── __init__.py
│   ├── main.py              # Main entry point for the FastAPI app
│   ├── models.py            # SQLAlchemy models
│   ├── schemas.py           # Pydantic schemas
├── tara_db/                 # Database configuration
│   ├── database.py          # SQLAlchemy database setup
├── tara_web/                # Frontend React application
│   ├── src/                 # React source code
│   │   ├── App.jsx          # Main React component
│   │   ├── components/      # React components
│   │   ├── index.js         # React entry point
│   ├── public/              # Static assets
│   ├── package.json         # Frontend dependencies
```

## Prerequisites
- Docker and Docker Compose
- Node.js and npm (for frontend development)

## Setup and Installation

### Backend
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd tara-api
   ```
2. Create a `.env` file in the root directory and add the following:
   ```env
   db_url=postgresql://postgres:12345@db:5432/tara
   ```
3. Build and start the services using Docker Compose:
   ```bash
   docker-compose up --build
   ```
4. The backend API will be available at `http://localhost:8000`.

### Frontend
1. Navigate to the `tara_web` directory:
   ```bash
   cd tara_web
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. The frontend will be available at `http://localhost:3000`.

## API Endpoints

### Vehicle Endpoints
- **POST /vehicle**: Create a new vehicle.
- **GET /vehicles**: Retrieve all vehicles.
- **GET /vehicle/{vehicle_id}**: Retrieve a specific vehicle by ID.
- **PUT /vehicle/{vehicle_id}**: Update a specific vehicle by ID.
- **DELETE /vehicle/{vehicle_id}**: Delete a specific vehicle by ID.

## Technologies Used
- **Backend**: FastAPI, SQLAlchemy, PostgreSQL
- **Frontend**: React, Bootstrap
- **Deployment**: Docker, Docker Compose
