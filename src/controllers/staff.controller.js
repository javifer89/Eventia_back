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
    if (staffs.length === 0) {
      return res.json({ fatal: "no existe este empleado" });
    }
    res.json(staffs[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getByUser = async (req, res) => {
  try {
    const [staff] = await Staff.getByUsuario(req.params.usuario);
    if (staff.length === 0) {
      return res.json({ fatal: "no existe este usuario" });
    }

    res.json(staff[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getPerfil = async (req, res) => {
  //req.user son los datos del usuario
  res.json(req.user)
}

const remove = async (req, res) => {
  try {
    const { staffId } = req.params;
    const [staff] = await Staff.getById(staffId);
    const [result] = await Staff.deleteById(staffId);

    res.json(staff[0]);
    res.send(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { staffId } = req.params;
    const [result] = await Staff.updateById(staffId, req.body);
    const [staff] = await Staff.getById(staffId);

    res.json(staff[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const create = async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 6);
  try {
    const [result] = await Staff.insert(req.body);
    const [staffCreado] = await Staff.getStaffById(result.insertId);

    res.json(staffCreado[0]);
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
  login,
  getPerfil
};
