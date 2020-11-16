const knex = require("knex");

const knexConfig = require("../knexfile");
const configuredKnex = knex(config.development);

module.exports = configuredKnex;
