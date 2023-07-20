const router = require('express').Router();

const staffController = require('../../controllers/staff.controller');
const { checkLogin, checkToken } = require('../../helpers/middlewares');

//GET
router.get("/", /*checkLogin,*/ staffController.getAllStaff);
router.get("/id/:staffId", /*checkLogin,*/ staffController.getById);
router.get("/perfil", checkToken, staffController.getPerfil);
router.get('/:usuario', /*checkLogin,*/ staffController.getByUser);

//POST
router.post("/registro", staffController.create);
router.post("/login", staffController.login);

// PUT
router.put("/editar/:staffId", /*checkLogin,*/ staffController.update);

//DELETE
router.delete("/:staffId", /*checkLogin,*/ staffController.remove);



module.exports = router;
