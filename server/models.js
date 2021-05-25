const db = require('../db');

module.exports = {
  addThankYou(params) {
    const senderId = `SELECT id FROM users WHERE user_name = '${params[1]}'`;
    const receiverId = `SELECT id FROM users WHERE user_name = '${params[2]}'`;
    const q = `INSERT INTO sentthankyous(text, sender, receiver) VALUES ('${params[0]}', (${senderId}), (${receiverId}) )`;
    db.query(q, params);
  },

  getThankYous(callback) {
    const q = 'SELECT * FROM sentthankyous';

    db.query(q, (err, results) => {
      callback(err, results);
    });
  },

};
