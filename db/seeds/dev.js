/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex.raw('TRUNCATE TABLE "employee" CASCADE');
  await knex.raw('TRUNCATE TABLE "weekly_record" CASCADE');
  const now = new Date();
  await knex("employee").insert([
    {
      id: 1,
      id_employee: "deve/*+-1234",
      name: "test name1",
      last_name: "test lastname",
      charge: "developer",
    },
    {
      id: 2,
      id_employee: "test/*+-1234",
      name: "test name2",
      last_name: "test lastname2",
      charge: "QA",
    },
  ]);
  await knex("weekly_payment").insert([
    {
      id: 1,
      salary_initial: "2000.10",
      date_in: now,
      date_out: now,
      hour: 8,
      hour_extra: 1,
      hour_total: 9,
      final_payment: "5000.00",
      employee_id: "deve/*+-1234",
    },
    {
      id: 2,
      salary_initial: "100",
      date_in: now,
      date_out: now,
      hour: 8,
      hour_extra: 1,
      hour_total: 9,
      final_payment: "300",
      employee_id: "test/*+-1234",
    },
  ]);

  await knex("weekly_record").insert([
    {
      id: 1,
      salary_initial: "2000.10",
      check_in: "13:00:59",
      check_out: "20:00:59",
      star_date: now,
      final_payment: "5000.00",
      employee_id: "deve/*+-1234",
      payment_id: 1,
    },
    {
      id: 2,
      salary_initial: "100",
      check_in: "10:00:59",
      check_out: "15:00:59",
      star_date: "NOW()",
      final_payment: "300",
      payment_id: 2,
    },
  ]);
};
