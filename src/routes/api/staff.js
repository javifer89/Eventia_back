const router = require('express').Router();

const staffController = require('../../controllers/staff.controller');

//GET
router.get('/staff/:usuario', staffController.getByUser);
router.get('/:staffId', staffController.getById);

// PUT
router.put('/:staffId', staffController.update);

//DELETE
router.delete("/:staffId", staffController.remove);





module.exports = router;
