const Staff = require("../models/staff.model");

const getById = async (req, res) => {
  try {
    const [staffs] = await Staff.getStaffById(req.params.staffId);
    if (staff.length === 0) {
      return res.json({ fatal: "no existe este empleado" });
    }
    res.json([staffs]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getByUser = async (req, res) => {
  try {
    const [staffs] = await Staff.getByUsuario(req.params.usuario);
    if (staffs.length === 0) {
      return res.json({ fatal: "no existe este usuario" });
    }

    res.json([staffs]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { staffId } = req.params;
    const [usuarios] = await Staff.getById(staffId);
    const [result] = await Staff.deleteById(staffId);

    res.json(usuarios[0])
    res.send(result)

  } catch (error) {
    res.json({ fatal: error.message });
  }
};

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

const create = async (req, res) => {
  //console.log(req.body)
  try {
    const [result] = await Staff.insert(req.body);
    //const [staffs] = await staff.
    const [usuarios] = await Usuario.getById(usuarioId);

    res.json(usuarios[0])


  } catch (error) {
    res.json({ errorcito: error.message });
  }
}

module.exports = {
  getById,
  getByUser,
  remove,
  update,
  create
};

