const { Model } = require("objection");

class WeeklyRecord extends Model {
	// Table name is the only required property.
	static get tableName() {
		return "weekly_record";
	}

	// Optional JSON schema.
	static get jsonSchema() {
		return {
			type: "object",
			required: ["employee_id"],

			properties: {
				id: { type: "integer" },
				employee_id: { type: "string" },
				payment_id: { type: "integer" },
			},
		};
	}

	// This object defines the relations to other models.
	static get relationMappings() {
		const Employee = require("./employee");
		const WeeklyPayment = require("./weeklyPayment");

		return {
			employee: {
				relation: Model.BelongsToOneRelation,
				modelClass: Employee,
				join: {
					from: "weekly_record.employee_id",
					to: "employee.id_employee",
				},
			},
			weeklyPayment: {
				relation: Model.BelongsToOneRelation,
				modelClass: WeeklyPayment,
				join: {
					from: "weekly_record.payment_id",
					to: "weekly_payment.id",
				},
			},
		};
	}
}

module.exports = WeeklyRecord;
