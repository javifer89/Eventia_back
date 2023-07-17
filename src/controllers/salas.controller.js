const Sala = require('../models/salas.model')

const create = async (req, res) => {
    try {
        const [result] = await Sala.insert(req.body);
        res.json(result);
    } catch (error) {
        res.json({ errorcito: error.message });
    }
}

module.exports = {
    create
}