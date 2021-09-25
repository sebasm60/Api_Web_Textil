const account = require('../schemas/accounts');
const bcrypt = require('bcrypt');
const controller = {};

//Funcion para crear un nuevo usuario.
controller.signup = async (req, res) => {
    try{
        const {email, password} = req.body;
        const newAccount = new account({
            email,
            password
        });
        await newAccount.save();
        res.json({ newAccount });
    } catch(e){
        res.send({ status: 404, message: 'Error en el servidor', error: e.code });
    };
};

//Funcion para iniciar sesion.
controller.login = async (req, res) => {
    const {email, password} = req.body;
    await account.findOne({email})
    .then( user => {
        if(!user) res.send({status: 404, messaje : 'User not found'});    
        bcrypt.compare(password, user.password)
        .then(match => {
            if(match){
                payload = {
                    email: user.email
                };
                res.status(200).send({messaje : 'Access successful', payload});
            } else {
                res.send({status: 404, messaje : 'Password wrong'});
            }
        })
        .catch(err => {
            res.status(500).send(err);
        });
    })
    .catch(err => {
        res.status(500).send(err);
    });
};

//Actualizar informacion de un usuario.
controller._update = async (req, res) => {
    try {
        const { email, password } = req.body;
        const newAccount = {
            email, password
        }
        await account.findOneAndUpdate(req.params.email, newAccount);
    } catch (e) {
        res.status(500).json({errorCode: e.err, message: 'Error en el servidor'});
    }
};

//Eliminar un usuario.
controller.delete = async (req, res) => {
    await account.findOneAndDelete(req.params.email);
    res.json({message: 'Succes'});
};

//Funcion para listar todos los usuarios registrados
controller.list = async (req, res) =>{
    const accounts = await account.find();
    res.json(accounts);
};

module.exports = controller;