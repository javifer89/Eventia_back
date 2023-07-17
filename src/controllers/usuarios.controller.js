const Usuario = require("../models/usuarios.model");

const update = async (req, res) => {
    try {
        const { usuarioId } = req.params
        const [result] = await Usuario.updateById(usuarioId, req.body)

        //Puedo devolver el usuario modificado cuando tenga el geyById de gustavo. 
        const [usuarios] = await Usuario.getById(usuarioId);

        res.json(usuarios[0])

    } catch (error) {
        res.json({ fatal: error.message })
    }
}



module.exports = {
    update
}