const bcrypt = require("bcryptjs");
const Staff = require("../models/staff.model");
const { createToken } = require("../helpers/utils");

const getAllStaff = async (req, res) => {
  try {
    const [staff] = await Staff.getStaff();
    res.json(staff);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};


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

    res.json(usuarios[0]);
    res.send(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { staffId } = req.params;
    const [result] = await Staff.updateById(staffId, req.body);
    const [usuarios] = await Staff.getById(usuarioId);

    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const create = async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 6); // encriptamos la password
  try {
    const [result] = await Staff.insert(req.body);
     const [usuarios] = await Staff.getStaffById(result.insertId);

    res.json(usuarios[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const login = async (req, res) => {
  try {
    const [staff] = await Staff.getByEmail(req.body.email);
    if (staff.length === 0) {
      return res.json({ fatal: 'No hay usuario con ese email' });
    }
    const user = staff[0];
    //Comprobar si las password coinciden
    const passwordIguales = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIguales) {
      return res.json({ fatal: "error en el email y/o contraseña" });
    }
    res.json({
      succes: "Login correcto",
      token: createToken(user),
      rol: user.rol
    });
  } catch (error) {
    res.json({ fatal: error.message });
  }
}


module.exports = {
  getAllStaff,
  getById,
  getByUser,
  remove,
  update,
  create,
  login
};
