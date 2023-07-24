const router = require("express").Router();

const reservasController = require("../../controllers/reservas.controller");

const { checkToken } = require("../../helpers/middlewares");
//GET
router.get("/", reservasController.getAll);
// router.get("/usuario/:usersala", /*checkToken,*/ reservasController.getByUsuario);
router.get("/:id_reserva", /*checkToken,*/ reservasController.getById);

//POST
router.post("/", checkToken, reservasController.create);


//PUT
router.put("/editar/:id_reserva", reservasController.update);

//DELETE
router.delete("/:id_reserva", reservasController.remove);

module.exports = router;
