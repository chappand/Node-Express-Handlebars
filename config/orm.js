const connection = require('./connection.js');

const printQuestionMarks = (num) => {
    const arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push('?');
    }
  
    return arr.toString();
  };  

  const objToSql = (ob) => {
    const arr = [];

    for (const key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
          if (typeof value === 'string' && value.indexOf(' ') >= 0) {
            value = `'${value}'`;
          }
          arr.push(`${key}=${value}`);
        }
      }
    
      return arr.toString();
    };

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
      update(objColVals, condition, cb) {
        let queryString = `UPDATE burgers`;
    
        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, (err, result) => {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
    };

module.exports = orm;