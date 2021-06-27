exports.up = function (knex) {
  return knex.schema.createTable('orders', table => {
    table.increments('id')
    table.string('name')
    table.string('name')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('fruit')
}
