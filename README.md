Todo List Web Application - Server Code
=======================================

Overview
--------

This repository contains the server-side code for the Todo List web application. The server is responsible for handling various functionalities, including user authentication, task management (CRUD operations), and interactions with the database.

Features
--------

*   **User Authentication:** Secure user login sessions to protect user data and ensure that users can only access their own tasks.
*   **Task Management Endpoints:**
    *   **GET /tasks:** Retrieve tasks based on user credentials.
    *   **POST /tasks:** Add a new task to the database.
    *   **PUT /tasks/:id:** Update an existing task.
    *   **DELETE /tasks/:id:** Remove a task from the database.
*   **Database Interaction:** Seamless integration with a database to store and retrieve task information.
*   **Error Handling:** Robust error handling for various scenarios, ensuring a smooth user experience and aiding in debugging.
*   **Security Measures:** Implementation of security best practices, including input validation, parameterized queries, and encryption.
