const router = require('express').Router();

const salasController = require('../../controllers/salas.controller');

//GET
router.use('/reservadas', salasController.getReservadas);
router.use('/libres', salasController.getLibres);
router.use('/usuario/:usersala', salasController.getByUsuario);
router.use('/:salaId', salasController.getById);

// PUT
router.put('/:salaId', salasController.update);

//DELETE
router.delete("/:salaId", salasController.remove);


module.exports = router;
