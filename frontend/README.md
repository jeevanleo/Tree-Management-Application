# Tree Management Application

This is a full-stack application using Next.js for the frontend and NestJS for the backend to build, manage, and persist a tree structure with a depth of 10,000 nodes.

## Features

- User authentication
- Tree structure management
- Save and load tree structures
- Optimized for performance

## Setup

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`
3. Run the development server: `npm run start`

## API

The backend provides the following endpoints:

- `POST /users`: Create a new user
- `GET /users/:username`: Retrieve user information
- `PUT /users/:username/tree`: Update user tree

## Testing

Run tests using the following commands:

- Frontend: `npm run test`
- Backend: `npm run test`

## Deployment

- Ensure both frontend and backend are deployed to appropriate environments.
- Update API endpoint URLs in the frontend to point to the deployed backend.

## Author

- [Your Name](https://github.com/yourusername)
