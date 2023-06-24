// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const { dev } = require("objection");
module.exports = {
	development: {
		client: "postgresql",
		connection: {
			database: process.env.NAME_DB,
			user: process.env.USER_DB,
			password: process.env.PASS_DB,
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},
		seeds: {
			directory: "./seeds",
		},
		...dev,
	},
};
