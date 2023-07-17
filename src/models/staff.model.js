const getStaffById = (staffId) => {
  return db.query("select * from staff where id = ?", [staffId]);
};

const getByUsuario = (userName) => {
  return db.query("select * from staff where usuario = ?", [userName]);
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


const getById = (staffId) => {
  return db.query('select * from staff where id = ?', [staffId]) //donde va el valor que es variable ponemos un ?
}

const updateById = (staffId, { nombre, rol, usuario, password, email }) => {
  return db.query('update staff set nombre = ?, rol = ?, usuario = ?, password = ?, email = ?',
    [nombre, rol, usuario, password, email, staffId])

}


module.exports = {
  getStaffById,
  getByUsuario,
  deleteById,
  updateById,
  getById
};