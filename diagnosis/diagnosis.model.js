const connection = require("../config/db");

function executeQuery(query, params, callback) {
  // Use the connection
  connection.query(query, params, function (error, results, fields) {
    // And done with the connection.
    // Handle error after the release.
    if (error) {
      console.log(error);
      callback(true, {});
    } else callback(false, results);
    // Don't use the connection here, it has been returned to the pool.
  });
}

let diagnosis = {
  addDiagnosis: function (params, callback) {
    executeQuery(
      "insert into diagnosis (appointment_id, diagnosis, findings, advice, admitted, date_created, date_modified) values (?, ?, ?, ?, ?, ?, ?)",
      [
        params.appointment_id,
        params.diagnosis,
        params.findings,
        params.advice,
        params.admitted,
        params.date,
        params.date,
      ],
      callback
    );
  },
  getAllDiagnosis: function (params, callback) {
    executeQuery("select * from diagnosis", callback);
  },
  getDiagnosis: function (params, callback) {
    executeQuery(
      "select * from diagnosis where appointment_id=?",
      [params.appointment_id],
      callback
    );
  },
};

module.exports = diagnosis;
