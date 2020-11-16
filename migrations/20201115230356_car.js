exports.up = function (knex) {
  return knex.schema.createTable("cars", (table) => {
    table.increments();
    table.text("make", 20);
    table.text("model", 20);
    table.decimal("milage", 1);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
