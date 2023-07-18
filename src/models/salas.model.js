const salasReservadas = () => {
  return db.query("select * from salas where disponible = 0");
};

const salasLibres = () => {
  return db.query("select * from salas where disponible = 1");
};

const salaByid = (id) => {
  return db.query("select * from salas where id = ?", [id]);
};

const usuarioSala = (id) => {
  return db.query("select * from usuarios_has_salas where usuarios_id = ?", [
    id,
  ]);
};


const deleteById = (salaId) => {
  return db.query("delete from salas where id = ?", [salaId]);
};


const getById = (salaId) => {
  return db.query('select * from salas where id = ?', [salaId])
}


const updateById = (salaId, { precio, disponible, aforo, nombre, direccion }) => {
  return db.query('update salas set precio = ?, disponible = ?, aforo = ?, nombre = ?, direccion = ?',
    [precio, disponible, aforo, nombre, direccion, salaId])

}


const insert = ({ precio, disponible, aforo, nombre, direccion }) => {

  return db.query(
    'insert into salas (precio, disponible, aforo, nombre, direccion) values (?, ?, ?, ?, ?)', [precio, disponible, aforo, nombre, direccion]
  )
};

const checkSalas = (salas_id, hora_reserva, fecha_reserva) => {
  return db.query(
    "select * from usuarios_has_salas where salas_id = ? and hora_reserva= ? and fecha_reserva= ?",
    [salas_id, hora_reserva, fecha_reserva]
  );
};

module.exports = {
  salasReservadas,
  salasLibres,
  usuarioSala,
  salaByid,
  deleteById,
  updateById,
  getById,
  insert,
  checkSalas
};
