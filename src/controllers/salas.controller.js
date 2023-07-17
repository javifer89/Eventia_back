const Sala = require("../models/salas.model");

const getReservadas = async (req, res) => {
  try {
    const [salas] = await Sala.salasReservadas();
    res.json([salas]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getLibres = async (req, res) => {
  try {
    const [salas] = await Sala.salasLibres();
    res.json([salas]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const [salas] = await Sala.salaByid(req.params.idsala);
    if (salas.length === 0) {
      return res.json({ fatal: "no existe esta sala" });
    }
    res.json([salas]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getByUsuario = async (req, res) => {
  try {
    const [salas] = await Sala.usuarioSala(req.params.usersala);
    res.json([salas]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { salaId } = req.params;
    const [result] = await Sala.deleteById(salaId);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

module.exports = {
  getReservadas,
  getLibres,
  getByUsuario,
  getById,
  remove,
};
