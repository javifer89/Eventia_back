const router = require('express').Router();

const staffController = require('../../controllers/staff.controller');
const { checkLogin, checkToken } = require('../../helpers/middlewares');

//GET
router.get("/", checkToken, staffController.getAllStaff);
router.get("/id/:staffId", checkToken, staffController.getById);
router.get("/perfil", checkToken, staffController.getPerfil);
router.get("/:usuario", checkToken, staffController.getByUser);

//TODO Es necesario utilizar checktoken o checklogin?

//POST
router.post("/registro", staffController.create);
router.post("/login", staffController.login);

// PUT
router.put("/editar/:staffId", checkToken, staffController.update);

//DELETE
router.delete("/:staffId", checkToken, staffController.remove);



module.exports = router;
