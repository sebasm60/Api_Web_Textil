const {Router} = require('express');
const router = Router();
//const controller = require('../controllers/accountsController');
const controllers = require('../controllers/accountControll');

router.post('/signup', controllers.newUser);
router.post('/login', controllers.login);
/*router.get('/listar', controller.list);
router.delete('/delete:id', controller.delete);*/

module.exports = router;