const router = require('express').Router();

const usuariosController = require('../../controllers/usuarios.controller');

//GET
router.get('/usuario/:usuarioId', usuariosController.getById);
router.get('/:dniusuario', usuariosController.getByDni);

//POST
router.post('/', usuariosController.create);

// PUT
router.put('/:usuarioId', usuariosController.update);

//DELETE
router.delete("/:usuarioId", usuariosController.remove);



module.exports = router
