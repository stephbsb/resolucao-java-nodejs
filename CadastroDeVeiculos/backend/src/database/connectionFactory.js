'use strict';

const sqlite3 = require('sqlite3');
const path = require('path');
const DB_PATH = path.resolve(__dirname, 'database.db');

const db = new sqlite3.Database(DB_PATH, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Connected to ' + DB_PATH + ' database.');
});

const sql = `
      CREATE TABLE IF NOT EXISTS veiculo (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        veiculo STRING NOT NULL,
        marca STRING NOT NULL,
        ano INTEGER NOT NULL,
        descricao TEXT NOT NULL,
        vendido BOOL NOT NULL,
        created DATETIME NOT NULL,
        updated DATETIME NOT NULL

        CHECK ((vendido == 0 OR vendido == 1) AND length(marca) >= 3 AND length(veiculo) >= 3 AND length(descricao) >= 3 AND ano >= 1900 AND ano <= 2050)
      )
      `;

db.run(sql, function (err) {
  if (err) {
    console.log('Erro ao criar a tabela Veiculos');
  }
});

module.exports = db;
