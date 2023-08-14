const Sala = require("../models/salas.model");
const NodeGeocoder = require('node-geocoder');

const options = {
  provider: 'google',
  apiKey: 'AIzaSyBMOcTcAkobrlfKIBOJNz6lDw2R5fJsk_Q',
};

const Reserva = require("../models/reservas.model");
const dayjs = require("dayjs");

// const getReservadas = async (req, res) => {
//   try {
//     const [salas] = await Sala.salasReservadas();
//     res.json([salas]);
//   } catch (error) {
//     res.json({ fatal: error.message });
//   }
// };

// //TODO CAMBIAR RESERVADAS Y LIBRES CON FUNCIÓN COMPROBARSALAS

// const getLibres = async (req, res) => {
//   try {
//     const [salas] = await Sala.salasLibres();
//     res.json([salas]);
//   } catch (error) {
//     res.json({ fatal: error.message });
//   }
// };
const getAll = async (req, res) => {
  try {
    const [salas] = await Sala.getAllSalas();
    res.json(salas);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getById = async (req, res) => {
  // try {
    const [sala] = await Sala.salaByid(req.params.salaId);

    if (sala.length === 0) {
      return res.json({ fatal: "no existe esta sala" });
    }

    const [reservas] = await Reserva.reservasBySala(sala[0].id);
  sala[0].reservas = reservas.map((reserva) => {
      //transformo a string las fechas y horas de reserva

      return {
        title: reserva.titulo,
        description: reserva.descripcion,
        start: reserva.fecha_reserva,
        end: reserva.fecha_fin_reserva,
      };
    });

    res.json(sala[0]);
  // } catch (error) {
  //   res.json({ fatal: error.message });
  // }
};

// const getByUsuario = async (req, res) => {
//   try {
//     const [salas] = await Sala.usuarioSala(req.params.usersala);
//     res.json(salas[0]);
//   } catch (error) {
//     res.json({ fatal: error.message });
//   }
// };

const remove = async (req, res) => {
  try {
    const { salaId } = req.params;

    const [result] = await Sala.deleteById(salaId);

    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { salaId } = req.params;
    const [result] = await Sala.updateById(salaId, req.body);
    const [salas] = await Sala.getById(salaId);

    res.json(salas[0])
  } catch (error) {
    res.json({ fatal: error.message })
  }
}

const create = async (req, res) => {
  try {
    //Transformamos la direccion en coordenadas de latitud y longitud
    const geocoder = NodeGeocoder(options);

    // Using callback
    const localizacion = await geocoder.geocode(req.body.direccion);
    req.body.latitud = localizacion[0].latitude
    req.body.longitud = localizacion[0].longitude
    //

    const [result] = await Sala.insert(req.body);
    console.log(result)
    const [salas] = await Sala.getById(result.insertId);

    res.json(salas[0])
  } catch (error) {
    res.json({ fatal: error.message });
  }
};


const comprobarSala = async (req, res) => {
  try {
    const { salas_id, fecha_reserva, hora_reserva } = req.body;
    const salaDisponible = await Sala.checkSalas(
      salas_id,
      fecha_reserva,
      hora_reserva
    );
    if (salaDisponible[0].length === 0) {
      res.json({ disponible: true });
    } else {
      res.json({ disponible: false });
    }
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

module.exports = {
  getAll,
  // getByUsuario,
  getById,
  remove,
  update,
  create,
  comprobarSala,
};
