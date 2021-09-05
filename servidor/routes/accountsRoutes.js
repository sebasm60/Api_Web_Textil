const {Router} = require('express');
const router = Router();
const controller = require('../controllers/accountsController');

router.post('/signup', controller.signup);
router.get('/listar', controller.list);

module.exports = router;