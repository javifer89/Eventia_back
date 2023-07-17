const router = require('express').Router();

const usuariosController = require('../../controllers/usuarios.controller');
const { checkUsuarioId } = require("../../helpers/middlewares");


//GET
router.get('/:usuarioId',checkUsuarioId, usuariosController.getById);
router.get('/:dniusuario', usuariosController.getByDni);

//POST
router.post('/', usuariosController.create);

// PUT
router.put("/:usuarioId", checkUsuarioId, usuariosController.update);

//DELETE
router.delete("/:usuarioId", checkUsuarioId, usuariosController.remove);


module.exports = router;
