controller = {};
const { cnn_mysql } = require('../settings/connectionDb');
const helpers = require('../lib/helpers');

//Funcion para crear nueva cuenta.
controller.newUser = async(req, res) => {
    try {
        const newAccount = { EMAIL, PASS, DATE_CREATED } = req.body;
        PASS = await helpers.encryptPassword(PASS);

        await cnn_mysql.promise()
        .execute(`INSERT INTO accounts (EMAIL, PASS, DATE_CREATED) VALUES (?, ?, ?)`,
        [EMAIL, PASS, DATE_CREATED]);
        res.json(newAccount);        
    } catch (error) {
        res.send({status : 404, message : error.message, code : error.code});
    };
};

//Funcion para iniciar sesión.
controller.login = async(req, res) => {
    try {
        const account = {EMAIL, PASS} = req.body;
        const rows = await cnn_mysql.promise().execute(`SELECT * FROM accounts WHERE EMAIL = ?`, [EMAIL]);
        
        if(rows[0][0]){
            const user = rows[0][0];
            const validPassword = await helpers.matchPassword(account.PASS, user.PASS);

            if(validPassword){
                payload = {
                    email: user.EMAIL
                };
                res.status(200).send({messaje : 'Access successful', payload});
            } else {
                res.send({status: 404, messaje : 'Password wrong'});
            };
        } else {
            res.send({status: 404, messaje : 'User not found'});
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = controller;