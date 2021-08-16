const path = require('path');

// requires and loads dotenv into the application code. Dotenv loads the 
// environment variables that you defined in .env (which currently only 
// contains DATABASE_URL) into process.env.
require("dotenv").config();

// const { DATABASE_URL } = process.env; stores the value of process.env.DATABASE_URL 
// in a variable called DATABASE_URL
const { DATABASE_URL } = process.env;


module.exports = {

  development: {
    client: 'postgresql',
    // connection: DATABASE_URL, sets the location of the database for 
    // the development environment to DATABASE_URL (which is currently the 
    // URL for your ElephantSQL database instance)
    connection: DATABASE_URL,
    // add specific place for migrations
    migrations: {
          directory: path.join(__dirname, "src", "db", "migrations"),
        },
        seeds: {
          directory: path.join(__dirname, "src", "db", "seeds"),
        },
  },

};
