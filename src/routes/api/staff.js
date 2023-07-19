const router = require('express').Router();

const staffController = require('../../controllers/staff.controller');
const { checkLogin } = require('../../helpers/middlewares');

//GET
router.get("/", /*checkLogin,*/ staffController.getAllStaff);
router.get('/:usuario', /*checkLogin,*/ staffController.getByUser);
router.get("/id/:staffId", /*checkLogin,*/ staffController.getById);

//POST
router.post("/registro", staffController.create);
router.post("/login", staffController.login);

// PUT
router.put("/editar/:staffId", /*checkLogin,*/ staffController.update);

//DELETE
router.delete("/:staffId", /*checkLogin,*/ staffController.remove);



module.exports = router;
