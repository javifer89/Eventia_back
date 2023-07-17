const router = require("express").Router();

const usuariosController = require("../../controllers/usuarios.controller");

router.delete("/:usuarioId", usuariosController.remove);

module.exports = router;
