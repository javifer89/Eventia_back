const router = require('express').Router();

const usuariosController = require('../../controllers/usuarios.controller');

router.get('/usuario/:idusuario', usuariosController.getById);
router.get('/:dniusuario', usuariosController.getByDni);



module.exports = router;