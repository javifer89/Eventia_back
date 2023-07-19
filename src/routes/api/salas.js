const router = require('express').Router();

const salasController = require('../../controllers/salas.controller');
const { checkToken } = require('../../helpers/middlewares');

//GET
router.get("/", salasController.getAll)
// router.get("/usuario/:usersala", /*checkToken,*/ salasController.getByUsuario);
router.get("/:salaId", /*checkToken,*/ salasController.getById);



//POST
router.post("/", salasController.create);
router.post("/comprobar_salas", salasController.comprobarSala);

//PUT
router.put('/editar/:salaId', salasController.update);

//DELETE
router.delete('/:salaId', salasController.remove);


module.exports = router
