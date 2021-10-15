const moment = require("moment");
const Model = require("./diagnosis.model");
const { validationResult } = require("express-validator");

exports.addDiagnosis = (req, res) => {
  let { errors } = validationResult(req);
  if (errors.length !== 0) {
    errors = errors.map((el) => ({ [el.param]: el.msg }));
    return res.status(400).json({ errors });
  }
  const { appointment_id, diagnosis, findings, advice, admitted } = req.query;
  const date = moment().format("YYYY-MM-DD HH:mm:ss");
  Model.addDiagnosis(
    {
      appointment_id,
      diagnosis,
      findings,
      advice,
      admitted,
      date,
    },
    (err, data) => {
      if (err) {
        return res.status(500).json({ error: "Server error" });
      } else {
        return res.json({ message: "success" });
      }
    }
  );
};

exports.getDiagnosis = (req, res) => {
  const { appointment_id } = req.params;
  Model.getDiagnosis({ appointment_id }, (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Server error" });
    } else {
      return res.json({ data: data[0] });
    }
  });
};

exports.getAllDiagnosis = (req, res) => {
  Model.getAllDiagnosis({}, (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Server error" });
    } else {
      return res.json({ data });
    }
  });
};
