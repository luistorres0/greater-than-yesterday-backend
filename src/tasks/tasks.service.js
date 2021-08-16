const knex = require("../db/connection");

function list() {
    return knex("tasks").select("*");

}

function read(task_id) {
    return knex("tasks").select("*").where({ task_id }).first();  
}

function create(task) {
  return knex("tasks")
    .insert(task)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
}

function destroy(task_id) {
    return knex("tasks").where({ task_id }).del();
}

module.exports = {
  create,
  delete: destroy,
  read,
  list
};