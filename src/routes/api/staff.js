const router = require('express').Router();

const staffController = require('../../controllers/staff.controller');


router.get('/staff/:usuario', staffController.getByUser);
router.get('/:idStaff', staffController.getById);

module.exports = router;