# To-Do List Full Stack Web Application

## Description
This is a full-stack To-Do List web application built using React for the frontend and Node.js/Express for the backend. The app allows users to add, edit, mark tasks as complete, delete tasks, and search through the list of tasks.

## Technologies Used

### Frontend:
- ReactJS
- React Toastify
- Vite
- Tailwind CSS

### Backend:
- Node.js
- ExpressJS
- MongoDB

## **Features**
- **Add Task**: Users can add tasks to the To-Do list.
- **Edit Task**: Users can edit an existing task.
- **Mark as Complete**: Users can mark tasks as completed.
- **Delete Task**: Users can delete tasks from the list.
- **Search**: Users can search through the list of tasks.
- **Responsive UI**: The app is designed to be responsive on both desktop and mobile.

# **API Documentation for To-Do Manager**

This document provides information on the available API endpoints for the To-Do Manager app.

## **Base URL**
All API requests are made to the following base URL:


## **Endpoints**

### 1. **GET /tasks**
Fetch all the tasks from the To-Do list.

#### **Response**
- **200 OK**: Returns a list of all tasks.
  
```json
[
  {
    "_id": "task_id",
    "taskName": "Example Task",
    "done": false
  }
]
```

### 2. **POST /tasks**
Add a new task to the To-Do list.

#### **Request Body**
```json
{
  "taskName": "New Task",
  "done": false
}
```

#### **Response**
- **201 Created**: Returns the created task.

#### **Response Body Example**
```json
{
  "_id": "task_id",
  "taskName": "New Task",
  "done": false
}
```

### 3. **PUT /tasks/:id**
Update an existing task by ID.

#### **Request Body**
```json
{
  "taskName": "Updated Task",
  "done": true
}
```

#### **Response**
- **201 Created**: Returns the updated task.

#### **Response Body Example**
```json
{
  "_id": "task_id",
  "taskName": "Updated Task",
  "done": true
}
```

### 4. **DELETE /tasks/:id**
Delete a task from the To-Do list by ID.

#### **Response**
- **200 OK**: Returns a confirmation message.

#### **Response Body Example**
```json
{
  "message": "Task deleted successfully."
}
```

## **Setup and Installation**

### Frontend:
1. Clone the repository:
    ```bash
    git clone https://github.com/manishguhe301/to-do-manager-mern
    ```
2. Navigate to the frontend directory:
    ```bash
    cd to-do-manager-mern/frontend
    ```
3. Install the required dependencies:
    ```bash
    npm install
    ```
4. Start the frontend development server:
    ```bash
    npm run dev
    ```

### Backend:
1. Navigate to the backend directory:
    ```bash
    cd to-do-manager-mern/backend
    ```
2. Install the required dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file and add MongoDB connection URL:
    ```env
    MONGO_URI=your_mongo_connection_string
    PORT=8080
    ```
4. Start the backend server:
    ```bash
    npm start
    ```

### **Running Both Frontend & Backend**
- To run both frontend and backend at the same time, consider using the `concurrently` package or run both in separate terminals.

```bash
# In one terminal (for backend)
npm start

# In another terminal (for frontend)
npm run dev
```

## Styling
The application is styled using **Tailwind CSS**, a utility-first CSS framework that helps create responsive and modern designs with minimal effort.

## Validation & Error Handling

### Frontend Validation
The app performs basic validation on user inputs (such as task name) to ensure data integrity.

### Error Handling
Proper error handling is implemented for both API requests and frontend actions. In case of an API error, a relevant error message is displayed to the user.

## Deployed Links

- **Frontend**: [https://to-do-manager-mern-deploy-ui.vercel.app/](https://to-do-manager-mern-deploy-ui.vercel.app/)
- **Backend API**: [https://to-do-manager-mern-deploy-api.vercel.app/](https://to-do-manager-mern-deploy-api.vercel.app/)




