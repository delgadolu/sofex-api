const { Model } = require("objection");

class WeeklyPayment extends Model {
	// Table name is the only required property.
	static get tableName() {
		return "weekly_payment";
	}

	// Optional JSON schema.
	static get jsonSchema() {
		return {
			type: "object",
			required: ["employee_id"],

			properties: {
				id: { type: "integer" },
				employee_id: { type: "string" },
				salary_initial: { type: "number" },
				hour: { type: "number" },
				hour_extra: { type: "number" },
				hour_total: { type: "number" },
				extra_money: { type: "number" },
				final_payment: { type: "number" },
			},
		};
	}

	// This object defines the relations to other models.
	static get relationMappings() {
		const WeeklyRecord = require("./weeklyRecord");
		const Employee = require("./employee");
		return {
			weeklyRecord: {
				relation: Model.HasManyRelation,
				modelClass: WeeklyRecord,
				join: {
					from: "weekly_payment.id",
					to: "weekly_record.payement_id",
				},
			},
			employee: {
				relation: Model.BelongsToOneRelation,
				modelClass: Employee,
				join: {
					from: "weekly_payment.employee_id",
					to: "employee.id_employee",
				},
			},
		};
	}
}

module.exports = WeeklyPayment;
