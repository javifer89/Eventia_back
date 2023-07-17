const router = require('express').Router();
const salasController = require('../../controllers/salas.controller')

router.post('/', salasController.create)



module.exports = router