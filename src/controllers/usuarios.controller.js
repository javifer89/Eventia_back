const Usuario = require("../models/usuarios.model");

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
};
