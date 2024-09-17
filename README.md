<h1>Backend Test Project with Node.js, Express, and MongoDB</h1>

This is a simple backend project developed using Node.js, Express, and MongoDB. As a frontend developer, I created this project as a learning exercise to explore the basics of backend development, understand how a server works, and experiment with routing, middleware, and database interactions.

<h2>Purpose of the Project</h2>
The purpose of this project is purely educational. It served as a sandbox for me to:

Set up a simple Express server.
Explore how to handle HTTP requests (GET, POST, PUT, DELETE).
Connect to a MongoDB database using Mongoose.
Experiment with routing, controllers, and middleware in Express.
Learn how to handle basic authentication (e.g., with JWT or sessions).
Understand how to structure a backend project.
Since this is a test project, the code is not production-ready, and there are likely better ways to structure certain parts of the application. However, it represents a valuable learning experience.

<h2>Features</h2>
Basic RESTful API with CRUD operations.
MongoDB connection using Mongoose.
Simple user authentication.
File uploads.
Error handling and middleware usage.
Technologies Used:
Node.js: JavaScript runtime for building the server-side application.
Express: Web framework for Node.js to manage routing and middleware.
MongoDB: NoSQL database for storing data.
Mongoose: MongoDB object modelling tool for Node.js, used to interact with the database.

Project full structure:
/frontend (not published yet)
/backend
  /controllers   # Logic for handling requests
  /models        # Mongoose schemas and models
  /routes        # Express routes
  /middleware    # Custom middleware (authentication, logging, etc.)
  /images        # Static folder for image uploads (if any)
  server.js      # Entry point for the server
