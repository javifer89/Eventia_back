const router = require("express").Router();

const usuariosController = require("../../controllers/usuarios.controller");
const { checkToken, checkTokenUsuario } = require("../../helpers/middlewares");

//GET
router.get("/", checkToken, usuariosController.getAll);
router.get("/perfil", checkTokenUsuario, usuariosController.getPerfil);
router.get("/:usuarioId", checkToken, usuariosController.getById);
router.get("/dni/:dniusuario", checkToken, usuariosController.getByDni);

//POST
router.post("/registro", usuariosController.create);
router.post("/login", usuariosController.login);

// PUT
router.put("/editar/:usuarioId", checkToken, usuariosController.update);

//DELETE
router.delete("/:usuarioId", checkToken, usuariosController.remove);

module.exports = router;
