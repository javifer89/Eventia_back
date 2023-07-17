const Sala = require('../models/salas.model');


const update = async (req, res) => {
    try {
        const { salaId } = req.params
        const [result] = await Sala.updateById(salaId, req.body)

        //Puedo devolver el usuario modificado cuando tenga el geyById de gustavo.
        const [salas] = await Sala.getById(salaId);

        res.json(salas[0])

    } catch (error) {
        res.json({ fatal: error.message })
    }
}



module.exports = {
    update
}