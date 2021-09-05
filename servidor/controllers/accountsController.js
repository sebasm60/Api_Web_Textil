const account = require('../schemas/accounts');
const controller = {};

controller.signup = async (req, res) => {
    try{
        const {correo, password} = req.body;
        const newAccount = new account({
            correo,
            password
        });
        await newAccount.save();
        res.json(newAccount);
    } catch(e){
        res.status(500).json({errorCode: e.err, message: 'Error en el servidor'});
    };
};

module.exports = controller;