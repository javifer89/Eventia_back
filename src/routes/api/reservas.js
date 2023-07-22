const router = require("express").Router();

const reservasController = require("../../controllers/reservas.controller");


//GET
router.get("/", reservasController.getAll);
// router.get("/usuario/:usersala", /*checkToken,*/ reservasController.getByUsuario);
router.get("/:salaId", /*checkToken,*/ reservasController.getById);

//POST
router.post("/", reservasController.create);
router.post("/comprobar_salas", reservasController.comprobarSala);

//PUT
router.put("/editar/:salaId", reservasController.update);

//DELETE
router.delete("/:salaId", reservasController.remove);

module.exports = router;
