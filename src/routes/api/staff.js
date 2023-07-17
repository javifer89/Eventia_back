const staffController = require('../../controllers/staff.controller');

const router = require('express').Router();

// PUT
router.put('/:staffId', staffController.update);

module.exports = router;