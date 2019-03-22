var db = require('../config/db');

var EmployeeDetails = db.Model.extend({
    tableName: 'employee_details'
});

module.exports = EmployeeDetails;