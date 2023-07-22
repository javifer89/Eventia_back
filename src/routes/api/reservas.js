const router = require("express").Router();

const reservasController = require("../../controllers/reservas.controller");


//GET
router.get("/", reservasController.getAllReservas);
// router.get("/usuario/:usersala", /*checkToken,*/ reservasController.getByUsuario);
router.get("/:id_reserva", /*checkToken,*/ reservasController.reservaById);

//POST
router.post("/", reservasController.create);


//PUT
router.put("/editar/:id_reserva", reservasController.updateById);

//DELETE
router.delete("/:id_reserva", reservasController.deleteById);

module.exports = router;
