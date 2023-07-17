const Staff = require('../models/staff.model')

const create = async (req, res) => {
    //console.log(req.body)
    try {
        const [result] = await Staff.insert(req.body);
        //const [staffs] = await staff.

        res.json(result)

    } catch (error) {
        res.json({ errorcito: error.message });
    }
}

module.exports = {
    create,
}