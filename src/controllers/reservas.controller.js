const Reserva = require("../models/salas.model");


const getAll = async (req, res) => {
  try {
    const [reservas] = await Sala.getAllReservas();
    res.json(reservas);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getById = async (req, res) => {
  try {
      const [reservas] = await Reserva.reservaByid(req.params.id_reserva); //revisar req.params
      console.log(reservas)
    if (reservas.length === 0) {
      return res.json({ fatal: "no existe esa reserva" });
    }
      res.json(reservas[0]);
      res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { reservaId } = req.params;

    const [result] = await Reserva.deleteById(reservaId);

    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { salaId } = req.params;
    const [result] = await Sala.updateById(salaId, req.body);
    const [reservas] = await Sala.getById(salaId);

      res.json(reservas[0]);
      res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const create = async (req, res) => {
  try {
    const [result] = await Sala.insert(req.body);
    console.log(result);
    const [salas] = await Sala.getById(result.insertId);

    res.json(salas[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

// const comprobarSala = async (req, res) => {
//   try {
//     const { salas_id, fecha_reserva, hora_reserva } = req.body;
//     const salaDisponible = await Sala.checkSalas(
//       salas_id,
//       fecha_reserva,
//       hora_reserva
//     );
//     if (salaDisponible[0].length === 0) {
//       res.json({ disponible: true });
//     } else {
//       res.json({ disponible: false });
//     }
//   } catch (error) {
//     res.json({ fatal: error.message });
//   }
// };

module.exports = {
  getAll,
  // getByUsuario,
  getById,
  remove,
  update,
  create,
};
