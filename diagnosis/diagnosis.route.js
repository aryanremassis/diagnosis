const { Router } = require("express");
const router = Router();
const Controller = require("./diagnosis.controller");
const { query } = require("express-validator");

router.post(
  "/addDiagnosis",
  query("appointment_id").isNumeric(),
  query("diagnosis").notEmpty().isString(),
  query("findings").notEmpty().isString(),
  query("advice").notEmpty().isString(),
  query("admitted").notEmpty().isString(),
  Controller.addDiagnosis
);

router.get("/getDiagnosis/:appointment_id", Controller.getDiagnosis);

router.get("/getAllDiagnosis", Controller.getAllDiagnosis);

module.exports = router;
