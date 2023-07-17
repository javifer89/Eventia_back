const router = require('express').Router();

const usuariosController = require('../../controllers/usuarios.controller');

router.get('/usuario/:idusuario', usuariosController.getById);
router.get('/:dniusuario', usuariosController.getByDni);

router.delete("/:usuarioId", usuariosController.remove);

module.exports = router;
