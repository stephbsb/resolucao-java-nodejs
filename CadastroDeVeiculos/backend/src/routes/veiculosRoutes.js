const express = require('express');

const veiculosController = require('../controllers/veiculosController');

const router = express.Router();

router.get('/', veiculosController.getVeiculos);
router.get('/find', veiculosController.getVeiculosByParam);
router.get('/:id', veiculosController.getVeiculoById);
router.post('/', veiculosController.postVeiculo);
router.put('/:id', veiculosController.putVeiculo);
router.patch('/:id', veiculosController.patchVeiculo);
router.delete('/:id', veiculosController.deleteVeiculo);

module.exports = router;
