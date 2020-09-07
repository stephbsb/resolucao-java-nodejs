const sqlite3 = require('sqlite3');
const path = require('path');
const DB_PATH = path.resolve(__dirname, 'database.db');

const db = new sqlite3.Database(DB_PATH, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  createTable();
  console.log('Connected to ' + DB_PATH + ' database.');
});

const createTable = () => {
  const sql = `
      CREATE TABLE IF NOT EXISTS veiculo (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        veiculo STRING,
        marca STRING,
        ano INTEGER,
        descricao TEXT,
        vendido BOOL,
        created DATETIME,
        updated DATETIME
      )
      `;

  db.run(sql, function (err) {
    if (err) {
      console.log('Erro ao criar a tabela Veiculos');
    }
  });
};

module.exports = db;
