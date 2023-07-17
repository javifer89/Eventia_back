const sala = require('../models/salas.model')

const getReservadas = async (req, res) => {

    try {
        const [salas] = await sala.salasReservadas()
        res.json([salas])
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const getLibres = async (req, res) => {
    try {
        const [salas] = await sala.salasLibres()
        res.json([salas])
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const getById = async (req, res) => {
    try {
        const [salas] = await sala.salaByid(req.params.idsala);
        if (salas.length === 0) {
            return res.json({ fatal: 'no existe esta sala' })
        }
        res.json([salas])
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const getByUsuario = async (req, res) => {

    try {
        const [salas] = await sala.usuarioSala(req.params.usersala)
        res.json([salas])
    } catch (error) {
        res.json({ fatal: error.message })
    }
}



module.exports = {
    getReservadas, getLibres, getByUsuario, getById
}