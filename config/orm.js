const connection = require('./connection.js');

const orm = {
    all(cb) {
      const queryString = `SELECT * FROM burgers;`;
      connection.query(queryString, (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create(cols, vals, cb) {
        let queryString = `INSERT INTO burgers`;
    
        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ') ';
    
        connection.query(queryString, vals, (err, result) => {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },

module.exports = orm;