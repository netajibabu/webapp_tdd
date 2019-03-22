
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('employee_details', function(table){
            table.increments('id').primary();
            table.string('employee_name');
            table.string('ntid').unique();
        })
    ])

};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('employee_details')
    ])

};
