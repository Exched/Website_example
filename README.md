
## Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running on your local machine.

## Getting Started

### Backend Setup

1. Navigate to the `backend` folder:

    ```bash
    cd my-website/backend
    ```

2. Install the necessary dependencies:

    ```bash
    npm install
    ```

3. Start the backend server:

    ```bash
    npm start
    ```

   The server will run on `http://localhost:3000`.

### Frontend Setup

1. No additional setup is required for the frontend. Just open the `index.html` file in your browser or serve it using a static file server.

### Running the Project

1. Make sure MongoDB is running on your machine.

2. Start the backend server as described above.

3. Open `frontend/index.html` in your browser. You should see the homepage of the website.

### Usage

1. **Register a New User:**

   - Navigate to the register page (`register.html`).
   - Fill in the username and password fields and submit the form.
   - You should see a success message indicating that the user has been registered.

2. **Login:**

   - Navigate to the login page (`login.html`).
   - Enter the registered username and password and submit the form.
   - On successful login, you will be redirected to the dashboard page.

3. **Dashboard:**

   - The dashboard page (`dashboard.html`) will display a welcome message with the logged-in username.
   - You can log out using the logout button.

### Notes

- The JWT token is stored in the browser's local storage for authentication.
- The token expires after 1 hour.

### Additional Information

- The backend server uses Express for routing and Mongoose for MongoDB interactions.
- Passwords are hashed using bcryptjs before storing in the database.
- JWT (JSON Web Token) is used for user authentication.

Feel free to modify and enhance the project according to your needs.

## License

This project is licensed under the MIT License.
# Website_example
