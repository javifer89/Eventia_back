const router = require("express").Router();

const contactoController = require("../../controllers/contacto.controller");


//GET
router.get("/", contactoController.getFormulario);


//POST
router.post("/", contactoController.create);





module.exports = router;
