const salasController = require('../../controllers/salas.controller');

const router = require('express').Router();

// PUT
router.put('/:salaId', salasController.update);

module.exports = router;