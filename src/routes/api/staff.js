const router = require('express').Router();

const staffController = require('../../controllers/staff.controller');
const { checkLogin } = require('../../helpers/middlewares');

//GET
router.get('/:usuario', checkLogin, staffController.getByUser);
router.get("/:staffId", checkLogin, staffController.getById);

//POST
router.post("/registro", staffController.create);
// router.post("/login");

// PUT
router.put("/:staffId", checkLogin, staffController.update);

//DELETE
router.delete("/:staffId", checkLogin, staffController.remove);



module.exports = router;
