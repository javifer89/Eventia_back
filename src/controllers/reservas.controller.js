const Reserva = require("../models/reservas.model");

const getAll = async (req, res) => {
  try {
    const [reservas] = await Reserva.getAllReservas();
    res.json(reservas);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const [reservas] = await Reserva.reservaByid(req.params.id_reserva); //revisar req.params
    console.log(reservas);
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
    const { reservaId } = req.params;
    const [result] = await Reserva.updateById(reservaId, req.body);
    const [reservas] = await Reserva.getById(reservaId);

    res.json(reservas[0]);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const create = async (req, res) => {
  try {
    req.body.usuarios_id = req.user.id
    const [result] = await Reserva.insert(req.body);
    console.log(result);
    const [reservas] = await Reserva.reservaByid(result.insertId);

    // res.json(result);
    res.json(reservas[0]);
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
