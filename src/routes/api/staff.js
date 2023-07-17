const router = require("express").Router();
const staffController = require('../../controllers/staff.controller')



router.post('/', staffController.create);


module.exports = router