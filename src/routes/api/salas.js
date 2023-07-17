const router = require('express').Router();

const salasController = require('../../controllers/salas.controller');

router.use('/reservadas', salasController.getReservadas);
router.use('/libres', salasController.getLibres);
router.use('/usuario/:usersala', salasController.getByUsuario);
router.use('/:idsala', salasController.getById);

router.delete("/:salaId", salasController.remove);

module.exports = router;
