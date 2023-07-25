const getAllReservas = () => {
  return db.query("select * from usuarios_has_salas");
};

const reservaById = (id_reserva) => {
  return db.query("select * from usuarios_has_salas where id_reserva = ?", [
    id_reserva,
  ]);
};

const reservasBySala = (id_sala) => {
  return db.query("select * from usuarios_has_salas where salas_id = ?", [
    id_sala,
  ]);
}

const deleteById = (id_reserva) => {
  return db.query("delete from usuarios_has_salas where id_reserva = ?", [
    id_reserva,
  ]);
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
    aceptada
  }
) => {
  return db.query(
    "update usuarios_has_salas set usuarios_id = ?, salas_id= ?, fecha_reserva= ?, hora_reserva= ?, fecha_fin_reserva= ?, hora_fin_reserva = ?, aceptada = ? where id_reserva = ?",
    [
      usuarios_id,
      salas_id,
      fecha_reserva,
      hora_reserva,
      fecha_fin_reserva,
      hora_fin_reserva,
      id_reserva,
      aceptada
    ]
  );
};

const insert = ({
  usuarios_id,
  salas_id,
  fecha_reserva,
  hora_reserva,
  fecha_fin_reserva,
  hora_fin_reserva,
  titulo,
  descripcion
}) => {
  return db.query(
    "insert into usuarios_has_salas (usuarios_id, salas_id, fecha_reserva, hora_reserva, fecha_fin_reserva, hora_fin_reserva, titulo, descripcion) values (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      usuarios_id,
      salas_id,
      `${fecha_reserva}T${hora_reserva}`,
      hora_reserva,
      `${fecha_fin_reserva}T${hora_fin_reserva}`,
      hora_fin_reserva,
      titulo,
      descripcion
    ]
  );
};

module.exports = {
  getAllReservas,
  reservaById,
  deleteById,
  updateById,
  insert,
  reservasBySala
};
