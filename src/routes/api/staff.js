const router = require('express').Router();

const staffController = require('../../controllers/staff.controller');
const { checkLogin } = require('../../helpers/middlewares');

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
// TODO REVISAR si va en middleware, hay que poner algo más aqui?
router.post("/login", login);

// PUT
router.put('/:staffId', staffController.update);

//DELETE
router.delete("/:staffId", staffController.remove);



module.exports = router;
