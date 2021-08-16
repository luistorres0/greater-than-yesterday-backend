# About the project

This project is the backend for my todo list application called
"> ystrdy". It uses Node.js, Express to run the server off the 
file located in src/server.js. It uses the Knex library to make 
SQL queries to the PostgreSQL database (ElephantSQL). Resources
and all defined routes are located in individual folders. 

# API endpoints

1. GET "/users/:user_id/tasks"
- returns all tasks for that user
2. POST "/tasks"
- adds new task to database
3. DELETE "tasks/:task_id"
- deletes task from database

# Resources

1. users:
    - allows frontend to track users and store basic data 
2. tasks:
    - allows unique users data to render on page
 

# Slogans that belong on a design board somewhere:

"Failure to plan is a plan for failure." 

"In life failure is inevitable. The key is to fail early, fail cheaply, 
and learn from your failures."

"> ystrdy makes planning easy!"

# DOCUMENTATION

1. Create your package.json
git init y

2. install express, knex, and postgresql
npm install express knex pg

4. You will only need this in dev dependencies in the package.json file
npm nodemon --save-dev

5. in package.json make start script
"start:dev" : "node src/server.js",

6. create knex file 
npx knex init

# greater-than-yesterday-backend
