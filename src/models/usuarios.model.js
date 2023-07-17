const usuarioByid = (id) => {
    return db.query('select * from usuarios where id = ?', [id])
}

const usuarioByDNI = (dni) => {
    return db.query('select * from usuarios where dni = ?', [dni])
}

/**
 * Elimina un usuario de la base de datos por su ID.
*
* @param {number|string} usuarioId - El ID del usuario que se va a eliminar.
* @returns {Promise} Una promesa que se resuelve cuando la eliminación ha sido completada.
*/
const deleteById = (usuarioId) => {
    return db.query("delete from usuarios where id = ?", [usuarioId]);
};


const getById = (usuarioId) => {
    return db.query('select * from usuarios where id = ?', [usuarioId]) //donde va el valor que es variable ponemos un ?
}

const updateById = (usuarioId, { username, email, telefono, dni, password, nombre, direccion }) => {
    return db.query('update usuarios set username = ?, email = ?, telefono = ?, dni = ?, password = ?, nombre = ?, direccion = ? where id = ?',
        [username, email, telefono, dni, password, nombre, direccion, usuarioId])

}


const insert = ({ nombre, direccion, email, telefono, dni, username, password }) => {

    return db.query(
        'insert into usuarios (nombre, direccion, email, telefono, dni, username, password) values (?, ?, ?, ?, ?, ?, ?)',
        [nombre, direccion, email, telefono, dni, username, password]
    )
};

module.exports = {
    usuarioByid, usuarioByDNI, deleteById, updateById, getById, insert
};