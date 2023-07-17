/**
 * Elimina un usuario de la base de datos por su ID.
 *
 * @param {number|string} usuarioId - El ID del usuario que se va a eliminar.
 * @returns {Promise} Una promesa que se resuelve cuando la eliminación ha sido completada.
 */
const deleteById = (usuarioId) => {
  return db.query("delete from usuarios where id = ?", [usuarioId]);
};

module.exports = {
  deleteById,
};
