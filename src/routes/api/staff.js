const router = require('express').Router();

const staffController = require('../../controllers/staff.controller');

// const { checkUsuarioId } = require("../../helpers/middlewares");
//  router.get("/", staffController.getAll);
// router.put("/:usuarioId", checkUsuarioId, staffController.update);
// router.delete("/:usuarioId", checkUsuarioId, staffController.remove);

//GET
router.get('/staff/:usuario', staffController.getByUser);
router.get('/:staffId', staffController.getById);

//POST
// router.post('/', staffController.create);
router.post("/registro", staffController.create);

router.post("/login", staffController.checkLogin);

// PUT
router.put('/:staffId', staffController.update);

//DELETE
router.delete("/:staffId", staffController.remove);



module.exports = router;
