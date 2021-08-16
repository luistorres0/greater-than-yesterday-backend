// Require the Express package and assign it to the variable "express".
const express = require("express");

const cors = require("cors");


/* The Express package exports a function. When you invoke that function, 
you get a new Express application and assign it to a variable.  */
const app = express();

const tasksRouter = require("./tasks/tasks.router");

app.use(cors());

app.use(express.json());

app.use("/tasks", tasksRouter);

// Not found handler
app.use((req, res, next) => {
  next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  res.status(status).json({ error: message });
});

// Export Express application to be used in server.js file
module.exports = app;
