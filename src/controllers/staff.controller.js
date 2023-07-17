const Staff = require("../models/staff.model")

const update = async (req, res) => {
    try {
        const { staffId } = req.params
        const [result] = await Staff.updateById(staffId, req.body)

        //Puedo devolver el usuario modificado cuando tenga el geyById de gustavo. 
        const [usuarios] = await Staff.getById(usuarioId);

        res.json(result[0])

    } catch (error) {
        res.json({ fatal: error.message })
    }
}



module.exports = {
    update
}