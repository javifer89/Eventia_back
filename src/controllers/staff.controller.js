const staff = require('../models/staff.model')

const getById = async (req, res) => {
    try {
        const [staffs] = await staff.idStaff(req.params.idStaff);
        if (staff.length === 0) {
            return res.json({ fatal: 'no existe este empleado' })
        }
        res.json([staffs])
    } catch (error) {
        res.json({ fatal: error.message })
    }
};


const getByUser = async (req, res) => {
    console.log(req)
    try {
        const [staffs] = await staff.usuarioStaff(req.params.usuario);
        if (staffs.length === 0) {
            return res.json({ fatal: 'no existe este usuario' })
        }

        res.json([staffs])
    } catch (error) {
        res.json({ fatal: error.message })
    }
};


module.exports = {
    getById, getByUser
}