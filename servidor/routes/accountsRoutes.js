const {Router} = require('express');
const router = Router();
const controller = require('../controllers/accountsController');

router.post('/', controller.signup);

module.exports = router;