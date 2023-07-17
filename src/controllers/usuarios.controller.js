const Usuario = require("../models/usuarios.model");

const getById = async (req, res) => {
  try {
    const [usuarios] = await Usuario.usuarioByid(req.params.idusuario);
    if (usuarios.length === 0) {
      return res.json({ fatal: "no existe este usuario" });
    }
    res.json([usuarios]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getByDni = async (req, res) => {
  try {
    const [usuarios] = await Usuario.usuarioByDNI(req.params.dniusuario);
    if (usuarios.length === 0) {
      return res.json({ fatal: "no existe este usuario con este dni" });
    }
    res.json([usuarios]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { usuarioId } = req.params;
    const [result] = await Usuario.deleteById(usuarioId);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

module.exports = {
  remove,
  getById,
  getByDni,
};
