const getAllReservas = () => {
  return db.query("select * from usuarios_has_salas");
};

const reservaByid = (id_reserva) => {
  return db.query("select * from usuarios_has_salas where id = ?", [
    id_reserva,
  ]);
};

const deleteById = (id_reserva) => {
  return db.query("delete from usuarios_has_salas where id = ?", [id_reserva]);
};

const updateById = (
  id_reserva,
  {
    usuarios_id,
    salas_id,
    fecha_reserva,
    hora_reserva,
    fecha_fin_reserva,
    hora_fin_reserva,
  }
) => {
  return db.query(
    "update usuarios_has_salas set usuarios_id = ?, salas_id= ?, fecha_reserva= ?, hora_reserva= ?, fecha_fin_reserva= ?, hora_fin_reserva = ? where id_reserva = ?",
    [
      usuarios_id,
      salas_id,
      fecha_reserva,
      hora_reserva,
      fecha_fin_reserva,
      hora_fin_reserva,
      id_reserva,
    ]
  );
};

const insert = ({
  usuarios_id,
  salas_id,
  id_reserva,
  fecha_reserva,
  hora_reserva,
  fecha_fin_reserva,
  hora_fin_reserva,
}) => {
  return db.query(
    "insert into usuarios_has_salas (usuarios_id, salas_id, id_reserva, fecha_reserva, hora_reserva, fecha_fin_reserva, hora_fin_reserva) values (?, ?, ?, ?, ?, ?, ?)",
    [
      usuarios_id,
      salas_id,
      id_reserva,
      fecha_reserva,
      hora_reserva,
      fecha_fin_reserva,
      hora_fin_reserva,
    ]
  );
};

module.exports = {
  getAllReservas,
  reservaByid,
  deleteById,
  updateById,
  getById,
  insert,
};
