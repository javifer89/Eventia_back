const router = require('express').Router();

const salasController = require('../../controllers/salas.controller');
const { checkToken } = require('../../helpers/middlewares');

//GET
// TODO AÑADIR checkToken
router.get('/reservadas', salasController.getReservadas);
router.get('/libres', salasController.getLibres);
router.get('/usuario/:usersala', salasController.getByUsuario);
router.get('/:salaId',  salasController.getById);

//POST
router.post('/', salasController.create)

//PUT
router.put('/:salaId', salasController.update);

//DELETE
router.delete('/:salaId', salasController.remove);


module.exports = router
