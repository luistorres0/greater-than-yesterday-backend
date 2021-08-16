
exports.up = function(knex) {
    return knex.schema.createTable("tasks", (table) => {
        table.increments("task_id").primary(); // sets product_id as the primary key
        table.string("title");
        table.integer("user_id").unsigned().notNullable();
        table
          .foreign("user_id")
          .references("user_id")
          .inTable("users")
          .onDelete("cascade");
        table.timestamps(true, true);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("tasks");
};
