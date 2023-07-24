const router = require('express').Router();

const salasController = require('../../controllers/salas.controller');
const { checkToken } = require('../../helpers/middlewares');

//GET
router.get("/", salasController.getAll)
router.get("/:salaId", salasController.getById);
//TODO Consultar si es necesario checktoken en el get


//POST
router.post("/", salasController.create);
router.post("/comprobar_salas", checkToken, salasController.comprobarSala);

//PUT
router.put("/editar/:salaId", checkToken, salasController.update);

//DELETE
router.delete("/:salaId", checkToken, salasController.remove);


module.exports = router
