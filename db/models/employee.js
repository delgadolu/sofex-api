const { Model } = require("objection");

class Employee extends Model {
	// Table name is the only required property.
	static get tableName() {
		return "employee";
	}

	// Optional JSON schema.
	static get jsonSchema() {
		return {
			type: "object",
			required: ["id_employee", "name", "last_name", "charge"],

			properties: {
				id: { type: "integer" },
				id_employee: { type: "string" },
				name: { type: "string", minLength: 1, maxLength: 255 },
				last_name: { type: "string", minLength: 1, maxLength: 255 },
				charge: { type: "string", minLength: 1, maxLength: 255 },
				status: { type: "integer" },
			},
		};
	}

	// This object defines the relations to other models.
	static get relationMappings() {
		const WeeklyRecord = require("./weeklyRecord");
		const WeeklyPayment = require("./weeklyPayment");
		return {
			weeklyRecord: {
				relation: Model.HasManyRelation,
				modelClass: WeeklyRecord,
				join: {
					from: "employee.id_employee",
					to: "weekly_record.employee_id",
				},
			},
			weeklyPayment: {
				relation: Model.HasManyRelation,
				modelClass: WeeklyPayment,
				join: {
					from: "employee.id_employee",
					to: "weekly_payment.employee_id",
				},
			},
		};
	}
}

module.exports = Employee;
