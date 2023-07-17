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

/**
 * Elimina un miembro del staff de la base de datos por su ID.
 *
 * @param {number|string} staffId - El ID del miembro del staff que se va a eliminar.
 * @returns {Promise} Una promesa que se resuelve cuando la eliminación ha sido completada.
 */
const deleteById = (staffId) => {
  return db.query("delete from staff where id = ?", [staffId]);
};

module.exports = {
  salasReservadas,
  salasLibres,
  usuarioSala,
  salaByid,
  deleteById,
};
