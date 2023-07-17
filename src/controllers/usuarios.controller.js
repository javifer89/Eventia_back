const Usuario = require('../models/usuarios.model')

const create = async (req, res) => {
    console.log(req.body)
    try {
        const [result] = await Usuario.insert(req.body);
        //const [usuarios] = await Usuario.

        res.json(result)
        console.log(result)
    } catch (error) {
        res.json({ errorcito: error.message });
    }
}

module.exports = {
    create,
}