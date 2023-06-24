const { Router } = require("express");
const router = Router();

const {
	getEmployeeByID,
	insertEmployee,
	updateEmployee,
	updateWeeklyPayment,
	deleteEmployee,
	checkIn,
	checkOut,
	starWeek,
	getReportPayment,
} = require("../controllers/index.controller");

router.get("/employee/:id", getEmployeeByID);
router.post("/employee", insertEmployee);
router.put("/employee", updateEmployee);
router.delete("/employee", deleteEmployee);
router.patch("/weekly_payment", updateWeeklyPayment);
router.patch("/check_in", checkIn);
router.patch("/check_out", checkOut);
router.patch("/star_week", starWeek);
router.get("/report_payment/:id_employee?", getReportPayment);

module.exports = router;
