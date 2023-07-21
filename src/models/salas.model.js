const getAllSalas = () => {
  return db.query("select * from salas");
};

const salaByid = (salaId) => {
  return db.query("select * from salas where id = ?", [salaId]);
};

// const usuarioSala = (id) => {
//   return db.query("select * from usuarios_has_salas where usuarios_id = ?", [
//     id,
//   ]);
// };

const deleteById = (salaId) => {
  return db.query("delete from salas where id = ?", [salaId]);
};

const getById = (salaId) => {
  return db.query("select * from salas where id = ?", [salaId]);
};

const updateById = (
  salaId,
  {
    precio,
    aforo,
    nombre,
    direccion,
    descripcion,
    url_foto,
    telefono_contacto,
    email_contacto,
  }
) => {
  return db.query(
    "update salas set precio = ?, aforo = ?, nombre = ?, direccion = ?, descripcion = ?, url_foto = ?, telefono_contacto = ?, email_contacto= ? where id = ?",
    [
      precio,
      aforo,
      nombre,
      direccion,
      descripcion,
      url_foto,
      telefono_contacto,
      email_contacto,
      salaId,
    ]
  );
};

const insert = ({ precio, aforo, nombre, direccion, descripcion, url_foto, telefono_contacto, email_contacto }) => {
  return db.query(
    "insert into salas (precio, aforo, nombre, direccion, descripcion, url_foto, telefono_contacto, email_contacto) values (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      precio,
      aforo,
      nombre,
      direccion,
      descripcion,
      url_foto,
      telefono_contacto,
      email_contacto,
    ]
  );
};

const checkSalas = (salas_id, fecha_reserva, hora_reserva) => {
  return db.query(
    "select * from usuarios_has_salas where salas_id = ? and fecha_reserva= ? and hora_reserva= ?",
    [salas_id, fecha_reserva, hora_reserva]
  );
};

module.exports = {
  getAllSalas,
  // usuarioSala,
  salaByid,
  deleteById,
  updateById,
  getById,
  insert,
  checkSalas,
};
