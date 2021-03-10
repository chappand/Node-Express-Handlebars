const orm = require('../config/orm.js');

const burger = {
    all(cb) {
      orm.all((res) => cb(res));
    },
    // The variables cols and vals are arrays.
    create(cols, vals, cb) {
      orm.create(cols, vals, (res) => cb(res));
    },
    update(objColVals, condition, cb) {
      orm.update(objColVals, condition, (res) => cb(res));
    }
  };

module.exports = burger;