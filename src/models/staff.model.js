const idStaff = (staffId) => {
  return db.query("select * from staff where id = ?", [staffId]);
};

const usuarioStaff = (user) => {
  return db.query("select * from staff where usuario = ?", [user]);
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
  idStaff,
  usuarioStaff,
  deleteById,
};
