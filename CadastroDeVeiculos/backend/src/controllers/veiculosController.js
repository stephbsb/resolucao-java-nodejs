const db = require('../database/connectionFactory');
const veiculoToPE = require('../utils/veiculoToPE');
const { marcas, validateMarca } = require('../utils/validateMarca');

const getDateTime = require('../utils/getDateTime');

const getVeiculos = (req, res) => {
  const sql = `SELECT * FROM veiculo`;

  db.all(sql, [], (err, veiculos) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao ler o banco de dados' });
    } else {
      veiculos.forEach((veiculo) => {
        veiculoToPE(veiculo);
      });
      res.status(200).json({ veiculos: veiculos });
    }
  });
};

const getVeiculosByParam = (req, res) => {
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
        veiculos.forEach((veiculo) => {
          veiculoToPE(veiculo);
        });
        console.log('Busca Concluida');
        res.status(200).json({ veiculos: veiculos });
      }
    }
  );
};

const getVeiculoById = (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM veiculo WHERE id = ? `;

  db.get(sql, [id], (err, veiculo) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao ler o banco de dados' });
    } else {
      if (veiculo) {
        veiculoToPE(veiculo);

        console.log('Busca Concluida');
        res.status(200).json({ veiculo: veiculo });
      } else {
        res.status(400).json({ error: 'Este veículo nao existe' });
      }
    }
  });
};

const postVeiculo = (req, res, next) => {
  const { veiculo, marca, ano, descricao, vendido } = req.body;

  if (
    veiculo == null ||
    marca == null ||
    ano == null ||
    descricao == null ||
    vendido == null
  ) {
    res.status(400).json({ error: 'Dados incompletos!' });
  } else if (!validateMarca(marca)) {
    res.status(400).json({
      error:
        'Entre com uma marca válida. Não são aceitos marcas escritas de forma errada!',
      marcas: marcas,
    });
  } else {
    const created = getDateTime();
    const updated = created;

    const sql = `INSERT INTO veiculo (veiculo,marca,ano,descricao,vendido,created,updated) VALUES (?,?,?,?,?,?,?)`;

    db.run(
      sql,
      [veiculo, marca, ano, descricao, vendido, created, updated],
      (err) => {
        if (err) {
          res.status(500).json({ error: 'Erro ao criar veiculo' });
        } else {
          console.log('Veiculo cadastrado com sucesso');
          res.status(200).json({ message: 'Veículo criado com sucesso!' });
        }
      }
    );
  }
};

const putVeiculo = (req, res, next) => {
  const id = req.params.id;
  const { veiculo, marca, ano, descricao, vendido } = req.body;

  if (
    veiculo == null ||
    marca == null ||
    ano == null ||
    descricao == null ||
    vendido == null
  ) {
    res.status(400).json({ error: 'Dados incompletos!' });
  } else if (!validateMarca(marca)) {
    res.status(400).json({
      error:
        'Entre com uma marca válida. Não são aceitos marcas escritas de forma errada!',
      marcas: marcas,
    });
  } else {
    const updated = getDateTime();

    const sql = `UPDATE veiculo SET veiculo = ?, marca = ?, ano = ?, descricao = ?, vendido = ?, updated = ?  WHERE id = ?`;

    db.run(
      sql,
      [veiculo, marca, ano, descricao, vendido, updated, id],
      function (err) {
        if (err) {
          console.log(err);
          const error = new Error('Erro ao atualizar dados do veiculo.');
          error.code = 500;
          next(error);
        } else {
          if (this.changes === 0) {
            res.status(400).json({ message: 'Este veículo nao existe.' });
          } else {
            res
              .status(200)
              .json({ message: 'Veiculo atualizado com sucesso.' });
          }
        }
      }
    );
  }
};

const patchVeiculo = (req, res, next) => {
  const id = req.params.id;
  const dados = req.body;

  if (dados == null) {
    res.status(500).json({ error: 'Não há dados para atualizar' });
  } else if (dados.marca && !validateMarca(dados.marca)) {
    res.status(400).json({
      error:
        'Entre com uma marca válida. Não são aceitos marcas escritas de forma errada!',
      marcas: marcas,
    });
  } else {
    const updated = getDateTime();

    dadosKeys = Object.keys(dados);
    dadosValues = Object.values(dados);

    const sql = `UPDATE veiculo SET ${dadosKeys.map(
      (dadoKey) => `${dadoKey} = ? `
    )}, updated = ?  WHERE id = ?`;

    db.run(sql, [...dadosValues, updated, id], function (err) {
      if (err) {
        console.log(err);
        res.status(500).json({ error: 'Erro ao atualizar dados do veiculo.' });
      } else {
        if (this.changes === 0) {
          res.status(400).json({ error: 'Este veículo nao existe.' });
        } else {
          console.log('Busca Concluida');
          res.status(200).json({ message: 'Veiculo atualizado com sucesso.' });
        }
      }
    });
  }
};

const deleteVeiculo = (req, res, next) => {
  const id = req.params.id;

  db.run(`DELETE FROM veiculo WHERE id = ? `, [id], function (err) {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Erro ao deletar veiculo.' });
    } else {
      if (this.changes === 0) {
        res.status(400).json({ error: 'Este veículo nao existe.' });
      } else {
        res.status(200).json({ message: 'Veiculo deletado com sucesso.' });
      }
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
