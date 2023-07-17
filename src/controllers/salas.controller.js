const Sala = require("../models/salas.model");

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
  remove,
};
