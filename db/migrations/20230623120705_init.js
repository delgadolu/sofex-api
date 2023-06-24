/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema
		.createTable("employee", (table) => {
			table.increments().primary();
			table.string("id_employee").notNullable().unique();
			table.string("name").notNullable();
			table.string("last_name").notNullable();
			table.string("charge").notNullable();
			table.enum("status", [1, 2]); //1:Activo 2:Inactivo
		})
		.createTable("weekly_payment", (table) => {
			table.increments().primary();
			table.decimal("salary_initial");
			table.datetime("date_in");
			table.datetime("date_out");
			table.decimal("hour");
			table.decimal("hour_extra");
			table.decimal("hour_total");
			table.decimal("extra_money");
			table.decimal("final_payment");
			table
				.string("employee_id")
				.references("id_employee")
				.inTable("employee")
				.onDelete("CASCADE")
				.index();
		})
		.createTable("weekly_record", (table) => {
			table.increments().primary();
			table.decimal("check_in");
			table.decimal("check_out");
			table.date("star_date").notNullable();
			table
				.string("employee_id")
				.references("id_employee")
				.inTable("employee")
				.onDelete("CASCADE")
				.index();
			table
				.integer("payment_id")
				.references("id")
				.inTable("weekly_payment")
				.onDelete("CASCADE")
				.index();
		});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists("weekly_record")
		.dropTableIfExists("weekly_payment")
		.dropTableIfExists("employee");
};
