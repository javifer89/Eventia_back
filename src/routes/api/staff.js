const router = require("express").Router();

const staffController = require("../../controllers/staff.controller");

router.delete("/:staffId", staffController.remove);

module.exports = router;
