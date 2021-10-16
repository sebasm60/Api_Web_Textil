controller = {};
const { cnn_mysql } = require('../settings/connectionDb');

controller.cards = async (req, res) => {

    let cardsInfo = {}    
    
    try {
        const prendas = await cnn_mysql.promise().execute(`SELECT * FROM prendas`);
        const cliente = await cnn_mysql.promise().execute(`SELECT * FROM cliente_prenda`);
        const taller = await cnn_mysql.promise().execute(`SELECT * FROM taller_prenda`);

        console.log(prendas[0].length);

        cardsInfo = [
            {
                icon: "bx bxs-t-shirt",
                total: prendas[0].length,
                titulo: "Prendas"
            },
            {
                icon: "bx bx-user-pin",
                total: cliente[0].length,
                titulo: "Clientes"
            },
            {
                icon: "bx bxs-factory",
                total: prendas[0].length,
                titulo: "Talleres"
            }
        ];

        res.json(cardsInfo);
    } catch (e) {
        res.send({ status: 404, message: 'Error en el servidor', error: e });
    };
};

module.exports = controller;