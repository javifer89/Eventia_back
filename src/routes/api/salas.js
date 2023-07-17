const router = require("express").Router();

const salasController = require("../../controllers/salas.controller");

router.delete("/:salaId", salasController.remove);

module.exports = router;
