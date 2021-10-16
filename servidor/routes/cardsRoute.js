const {Router} = require('express');
const router = Router();
const controllers = require('../controllers/controllerCards');

router.get('/cards', controller.cards);

module.exports = router;