'use strict';
const db = require('../database/connectionFactory');

/**
 * Modulo responsavel por manipular o banco de dados
 */
module.exports = {
  /**
   * Retorna lista com todos os veiculos
   * @return {Promise<Array>} Promise com o array de objetos de veiculos
   * @throws Erro na leitura do banco de dados
   */
  getAll() {
    const sql = `SELECT * FROM veiculo`;

    return new Promise((resolve, reject) => {
      db.all(sql, [], function (err, veiculos) {
        if (err) {
          console.log(err);
          reject(new Error('Erro ao ler o banco de dados'));
        } else {
          resolve(veiculos);
        }
      });
    });
  },

  /**
   * Retorna o veiculo referente ao ID passado como parâmetro
   * @return {Promise<Object>} Promise com o veiculo
   * @throws Erro na leitura do banco de dados
   */
  getById(id) {
    const sql = `SELECT * FROM veiculo WHERE id = ? `;

    return new Promise((resolve, reject) => {
      db.get(sql, [id], function (err, veiculo) {
        console.log(err);
        if (err) {
          console.log(err);
          reject(new Error('Erro ao ler o banco de dados'));
        } else {
          if (veiculo) {
            resolve(veiculo);
          } else {
            reject(new Error('Este veículo nao existe'));
          }
        }
      });
    });
  },

  /**
   * Retorna os veiculos referentes ao parametro passado
   * @param {string} key Parametro de busca
   * @param {any} value Valor do parâmetro
   * @return {Promise<Array>} Promise com o array veículos
   * @throws Erro na leitura do banco de dados
   */
  find(key, value) {
    const sql = `SELECT * FROM veiculo WHERE ${key} = ? COLLATE NOCASE`;

    return new Promise((resolve, reject) => {
      db.all(sql, [value], function (err, veiculos) {
        if (err) {
          console.log(err);
          reject(new Error('Erro ao ler o banco de dados'));
        } else {
          resolve(veiculos);
        }
      });
    });
  },

  /**
   * Cria um novo resgistro de veiculo
   * @param {string} veiculo
   * @param {string} marca
   * @param {number} ano
   * @param {string} descricao
   * @param {boolean} vendido
   * @param {string} created
   * @param {string} updated
   * @return {Promise<number>} Promise com o id do veiculo criado
   * @throws Erro na leitura do banco de dados
   */
  create(veiculo, marca, ano, descricao, vendido, created, updated) {
    const sql = `INSERT INTO veiculo (veiculo,marca,ano,descricao,vendido,created,updated) VALUES (?,?,?,?,?,?,?)`;

    return new Promise((resolve, reject) => {
      db.run(
        sql,
        [veiculo, marca, ano, descricao, vendido, created, updated],
        function (err) {
          if (err) {
            if (err.code === 'SQLITE_CONSTRAINT') {
              reject(new Error('Erro ao criar veículo. Dados inválidos!'));
            } else {
              reject(new Error('Erro ao criar novo veículo'));
            }
          } else {
            resolve(this.lastID);
          }
        }
      );
    });
  },

  /**
   * Atualiza todos os dados de um veiculo
   * @param {string} veiculo
   * @param {string} marca
   * @param {number} ano
   * @param {string} descricao
   * @param {boolean} vendido
   * @param {string} created
   * @param {string} updated
   * @param {number} id id do veiculo para atualizar os dados
   * @return {Promise}
   * @throws Erro na atualização
   */
  put(veiculo, marca, ano, descricao, vendido, updated, id) {
    const sql = `UPDATE veiculo SET veiculo = ?, marca = ?, ano = ?, descricao = ?, vendido = ?, updated = ?  WHERE id = ?`;

    return new Promise((resolve, reject) => {
      db.run(
        sql,
        [veiculo, marca, ano, descricao, vendido, updated, id],
        function (err) {
          if (err) {
            console.log(err);
            if (err.code === 'SQLITE_CONSTRAINT') {
              reject(new Error('Erro ao atualizar veículo. Dados inválidos!'));
            } else {
              reject(new Error('Erro ao criar novo veículo'));
            }
          } else {
            if (this.changes === 0) {
              reject(new Error('Este veiculo nao existe.'));
            } else {
              resolve();
            }
          }
        }
      );
    });
  },

  /**
   * Atualiza alguns dados de um veiculo
   * @param {Array<string>} keys nomes dos atributos a serem alterados
   * @param {Array} values valores a serem alterados
   * @param {number} id id do veiculo para atualizar os dados
   * @return {Promise}
   * @throws Erro na atualização
   */
  patch(keys, values, id) {
    const sql = `UPDATE veiculo SET ${keys.map(
      (key) => `${key} = ? `
    )}  WHERE id = ?`;

    return new Promise((resolve, reject) => {
      db.run(sql, [...values, id], function (err) {
        if (err) {
          console.log(err);
          if (err.code === 'SQLITE_CONSTRAINT') {
            reject(new Error('Erro ao atualizar veículo. Dados inválidos!'));
          } else {
            reject(new Error('Erro ao atualizar veículo'));
          }
        } else {
          if (this.changes === 0) {
            reject(new Error('Este veiculo nao existe.'));
          } else {
            resolve();
          }
        }
      });
    });
  },

  /**
   * Deleta veiculo referente ao id passado
   * @return {Promise}
   * @param {number} id id do veiculo a ser deletado
   * @throws Erro na leitura do banco de dados
   */
  delete(id) {
    const sql = `DELETE FROM veiculo WHERE id = ? `;

    return new Promise((resolve, reject) => {
      db.run(sql, [id], function (err) {
        console.log(err);
        if (err) {
          reject(new Error('Erro ao deletar veiculo'));
        } else {
          if (this.changes === 0) {
            reject(new Error('Este veiculo não existe'));
          } else {
            resolve();
          }
        }
      });
    });
  },
};
