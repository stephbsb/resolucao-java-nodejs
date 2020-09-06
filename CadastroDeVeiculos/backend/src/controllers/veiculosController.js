const db = require('../database/connection');
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

const getVeiculosByParam = (req, res, next) => {
  const q = req.query;

  if (!q) {
    return res
      .status(400)
      .json({ error: 'Filtros incompletos para a pesquisa.' });
  }

  db.all(
    `SELECT * FROM veiculo WHERE ${Object.keys(q)[0]} = ? COLLATE NOCASE`,
    [Object.values(q)[0]],
    (err, veiculos) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: 'erro ao ler o banco de dados' });
      } else {
        console.log('Busca Concluida');
        res.status(200).json({ veiculos: veiculos });
      }
    }
  );
};

const getVeiculoById = (req, res, next) => {
  const id = req.params.id;

  db.get(`SELECT * FROM veiculo WHERE id = ? `, [id], (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'erro ao ler o banco de dados' });
    } else {
      console.log('Busca Concluida');
      res.status(200).json({ veiculo: row });
    }
  });
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

const putVeiculo = (req, res, next) => {
  const id = req.params.id;
  const { veiculo, marca, ano, descricao, vendido } = req.body;

  if (!veiculo || !marca || !ano || !descricao || !vendido) {
    res.status(500).json({ error: 'Dados inclompletos!' });
  }

  const updated = getDateTime();

  const sql = `UPDATE veiculo SET veiculo = ?, marca = ?, ano = ?, descricao = ?, vendido = ?, updated = ?  WHERE id = ?`;

  db.run(sql, [veiculo, marca, ano, descricao, vendido, updated, id], (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'erro ao atualizar dados do veiculo.' });
    } else {
      console.log('Busca Concluida');
      res.status(200).json({ message: 'veiculo atualizado com sucesso.' });
    }
  });
};

const patchVeiculo = (req, res, next) => {
  const id = req.params.id;
  const dados = req.body;

  if (dados == null) {
    res.status(500).json({ error: 'Não há dados para atualizar' });
  }

  const updated = getDateTime();

  dadosKeys = Object.keys(dados);
  dadosValues = Object.values(dados);

  const sql = `UPDATE veiculo SET ${dadosKeys.map(
    (dadoKey) => `${dadoKey} = ? `
  )}, updated = ?  WHERE id = ?`;

  db.run(sql, [...dadosValues, updated, id], (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'erro ao atualizar dados do veiculo.' });
    } else {
      console.log('Busca Concluida');
      res.status(200).json({ message: 'veiculo atualizado com sucesso.' });
    }
  });
};

const deleteVeiculo = (req, res, next) => {
  const id = req.params.id;

  db.run(`DELETE FROM veiculo WHERE id = ? `, [id], (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'erro ao deletar veiculo.' });
    } else {
      console.log('Busca Concluida');
      res.status(200).json({ message: 'veiculo deletado com sucesso.' });
    }
  });
};

exports.getVeiculos = getVeiculos;
exports.getVeiculosByParam = getVeiculosByParam;
exports.getVeiculoById = getVeiculoById;
exports.postVeiculo = postVeiculo;
exports.putVeiculo = putVeiculo;
exports.patchVeiculo = patchVeiculo;
exports.deleteVeiculo = deleteVeiculo;
