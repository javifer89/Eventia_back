const usuariosController = require('../../controllers/usuarios.controller');

const router = require('express').Router();

// PUT
router.put('/:usuarioId', usuariosController.update);

module.exports = router;