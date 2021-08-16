// requires the tasks seed data and stores it in the tasks variable.
const tasks = require("../fixtures/tasks");

exports.seed = function (knex) {
  /* 
  1. The knex.raw() method uses the SQL statement RESTART IDENTITY to reset the primary key values.
  2. Adding CASCADE ensures that any references to the entries in the tasks table are deleted as 
      well when the entries are deleted.
  3. As a note, the Knex truncate() method is preferable to writing a raw SQL statement to truncate 
      the data, but it does not provide a way to reset the values in the primary key column after 
      entries are deleted from the table.
  4. Putting knex("tasks").insert(tasks) inside then() ensures that this line will only get 
      executed after the preceding knex.raw() function is complete.
  */
  return knex
    .raw("TRUNCATE TABLE tasks RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("tasks").insert(tasks);
    });
};