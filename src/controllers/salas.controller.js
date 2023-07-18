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
    const [salas] = await Sala.salaByid(req.params.salaId);
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
  console.log(req.params)
  try {
    const { salaId } = req.params;
    const [salas] = await Sala.getById(salaId);
    const [result] = await Sala.deleteById(salaId);

    res.json(salas[0])
    res.send(result)

  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const update = async (req, res) => {
  console.log(req.params)
  try {
    const { salaId } = req.params
    const [result] = await Sala.updateById(salaId, req.body)

    const [salas] = await Sala.getById(salaId);

    res.json(salas[0])

  } catch (error) {
    res.json({ fatal: error.message })
  }
}

const create = async (req, res) => {
  try {
    const [result] = await Sala.insert(req.body);
    const [usuarios] = await Usuario.getById(usuarioId);

    res.json(usuarios[0])

  } catch (error) {
    res.json({ fatal: error.message });
  }
}
const comprobarSala = async (req, res) => {
  //RES = null devuelve true
  //res = !null devuelve false
  try {
    const [salaDisponible] = await
  } catch (error) {
    res.json({ fatal: error.message });
  }
}

module.exports = {
  getReservadas,
  getLibres,
  getByUsuario,
  getById,
  remove,
  update,
  create
};
