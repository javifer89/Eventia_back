const router = require('express').Router();

router.use('/usuarios', require('./api/usuarios'));
router.use('/salas', require('./api/salas'));
router.use('/staff', require('./api/staff'));

module.exports = router;