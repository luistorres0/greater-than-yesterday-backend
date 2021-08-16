
exports.up = function(knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("user_id").primary(); // sets user_id as the primary key
        // table.string is the same as varchar
        table.string("user_name");
        table.string("profile_image");
        table.string("phone");
        table.string("email");
        table.string("password");
        table.timestamps(true, true); // adds created_at and updated_at columns; passing true as the first argument sets the columns to be a timestamp type while passing true as the second argument sets those columns to be non-nullable and to use the current timestamp by default
      });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable("users");
};
