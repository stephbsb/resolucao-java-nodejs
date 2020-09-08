'use strict';
const veiculoToPE = require('../utils/veiculoToPE');
const { marcas, validateMarca } = require('../utils/validateMarca');
const veiculosRepository = require('../repository/veiculosRepository');
const getDateTime = require('../utils/getDateTime');
const { isAnyEmptyOrNull } = require('../utils/isAnyEmptyOrNull');

/**
 * Modulo responsavel por receber requisições e fazer
 * validações antes de fazer busca no banco de dados
 */
module.exports = {
  getVeiculos(req, res) {
    veiculosRepository
      .getAll()
      .then((veiculos) => {
        veiculos.forEach((veiculo) => {
          veiculoToPE(veiculo);
        });
        res.status(200).json({ veiculos: veiculos });
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  },

  findVeiculos(req, res) {
    const q = req.query;

    if (!Object.keys(q)[0]) {
      return res
        .status(400)
        .json({ error: 'Filtros incompletos para a pesquisa.' });
    } else if (Object.keys(q).length > 1) {
      return res
        .status(400)
        .json({ error: 'Entre apenas um parametro de busca.' });
    } else {
      let value = Object.values(q)[0];

      if (Object.keys(q)[0] === 'vendido') {
        if (Object.values(q)[0] === 'true') {
          value = 1;
        } else if (Object.values(q)[0] === 'false') {
          value = 0;
        }
      }

      veiculosRepository
        .find(Object.keys(q)[0], value)
        .then((veiculos) => {
          veiculos.forEach((veiculo) => {
            veiculoToPE(veiculo);
          });
          res.status(200).json({ veiculos: veiculos });
        })
        .catch((error) => {
          res.status(500).json({ error: error.message });
        });
    }
  },

  getVeiculoById(req, res) {
    const id = req.params.id;

    veiculosRepository
      .getById(id)
      .then((veiculo) => {
        veiculo = veiculoToPE(veiculo);
        res.status(200).json({ veiculo: veiculo });
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  },

  postVeiculo(req, res) {
    const { veiculo, marca, ano, descricao, vendido } = req.body;

    if (!validateMarca(marca)) {
      res.status(400).json({
        error:
          'Entre com uma marca válida. Não são aceitos marcas escritas de forma errada!',
        marcas: marcas,
      });
    } else {
      const created = getDateTime();
      const updated = created;

      veiculosRepository
        .create(veiculo, marca, ano, descricao, vendido, created, updated)
        .then((id) => {
          res
            .status(201)
            .json({ message: 'Veiculo criado com sucesso!', id: id });
        })
        .catch((error) => {
          res.status(500).json({ error: error.message });
        });
    }
  },

  putVeiculo(req, res) {
    const id = req.params.id;
    const { veiculo, marca, ano, descricao, vendido } = req.body;

    if (isAnyEmptyOrNull([veiculo, marca, ano, descricao, vendido])) {
      res.status(400).json({ error: 'Dados incompletos!' });
    } else if (!validateMarca(marca)) {
      res.status(400).json({
        error:
          'Entre com uma marca válida. Não são aceitos marcas escritas de forma errada!',
        marcas: marcas,
      });
    } else {
      const updated = getDateTime();

      veiculosRepository
        .put(veiculo, marca, ano, descricao, vendido, updated, id)
        .then(() => {
          res.status(200).json({ message: 'Veiculo atualizado com sucesso!' });
        })
        .catch((error) => {
          res.status(500).json({ error: error.message });
        });
    }
  },

  patchVeiculo(req, res) {
    const id = req.params.id;
    const dados = req.body;
    console.log(Object.values(dados));
    if (isAnyEmptyOrNull(Object.values(dados))) {
      res.status(400).json({ error: 'Não há dados para atualizar' });
    } else if (dados.marca && !validateMarca(dados.marca)) {
      res.status(400).json({
        error:
          'Entre com uma marca válida. Não são aceitos marcas escritas de forma errada!',
        marcas: marcas,
      });
    } else {
      const updated = getDateTime();

      const keys = [...Object.keys(dados), 'updated'];
      const values = [...Object.values(dados), updated];

      veiculosRepository
        .patch(keys, values, id)
        .then(() => {
          res.status(200).json({ message: 'Veiculo atualizado com sucesso!' });
        })
        .catch((error) => {
          res.status(500).json({ error: error.message });
        });
    }
  },
  deleteVeiculo(req, res) {
    const id = req.params.id;

    veiculosRepository
      .delete(id)
      .then(() => {
        res.status(200).json({ message: 'Veiculo deletado com sucesso!' });
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  },
};
