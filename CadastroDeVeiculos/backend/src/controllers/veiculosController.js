const db = require('../database/connection');
const veiculoRepository = require('../database/veiculosRepository');
const getDateTime = require('../utils/getDateTime');

const getVeiculos = (req, res, next) => {
  db.all(`SELECT * FROM veiculo`, [], (err, veiculos) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'erro ao ler o banco de dados' });
    } else {
      console.log('Busca Concluida');
      res.status(200).json({ veiculos: veiculos });
    }
  });
};

const getVeiculosByParam = (req, res, next) => {};

const getVeiculoById = (req, res, next) => {
  const id = req.params.id;

  const veiculo = db.get(`SELECT * FROM veiculo WHERE id = ? `, [id], (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Busca Concluida');
    }
  });

  res.status(200).json({ message: id });
};

const postVeiculo = (req, res, next) => {
  const { veiculo, marca, ano, descricao, vendido } = req.body;

  const created = getDateTime();
  const updated = created;

  const sql = `INSERT INTO veiculo (veiculo,marca,ano,descricao,vendido,created,updated) VALUES (?,?,?,?,?,?,?)`;

  db.run(
    sql,
    [veiculo, marca, ano, descricao, vendido, created, updated],
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Veiculo cadastrado com sucesso');
      }
    }
  );

  res.status(200).json({ message: 'Veículo criado com sucesso!' });
};

const putVeiculo = (req, res, next) => {};

const patchVeiculo = (req, res, next) => {};

const deleteVeiculo = (req, res, next) => {};

exports.getVeiculos = getVeiculos;
exports.getVeiculosByParam = getVeiculosByParam;
exports.getVeiculoById = getVeiculoById;
exports.postVeiculo = postVeiculo;
exports.putVeiculo = putVeiculo;
exports.patchVeiculo = patchVeiculo;
exports.deleteVeiculo = deleteVeiculo;
