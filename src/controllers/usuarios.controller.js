const usuario = require('../models/usuarios.model')


const getById = async (req, res) => {
    try {
        const [usuarios] = await usuario.usuarioByid(req.params.idusuario);
        if (usuarios.length === 0) {
            return res.json({ fatal: 'no existe este usuario' })
        }
        res.json([usuarios])
    } catch (error) {
        res.json({ fatal: error.message })
    }
};

const getByDni = async (req, res) => {
    try {
        const [usuarios] = await usuario.usuarioByDNI(req.params.dniusuario);
        if (usuarios.length === 0) {
            return res.json({ fatal: 'no existe este usuario con este dni' })
        }
        res.json([usuarios])
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

module.exports = {
    getById, getByDni
}