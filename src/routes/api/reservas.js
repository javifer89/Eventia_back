const router = require("express").Router();

const reservasController = require("../../controllers/reservas.controller");


//GET
router.get("/", reservasController.getAll);
// router.get("/usuario/:usersala", /*checkToken,*/ reservasController.getByUsuario);
router.get("/:id_reserva", /*checkToken,*/ reservasController.getById);

//POST
router.post("/", reservasController.create);


//PUT
router.put("/editar/:id_reserva", reservasController.update);

//DELETE
router.delete("/:id_reserva", reservasController.remove);

module.exports = router;
