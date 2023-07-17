const router = require('express').Router();

const { checkToken } = require("../helpers/middlewares");

router.use("/usuarios", checkToken, require("./api/usuarios"));

router.use("/salas", checkToken, require("./api/salas"));

router.use("/staff", checkToken, require("./api/staff"));


module.exports = router;
