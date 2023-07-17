const getById = (usuarioId) => {
    return db.query('select * from usuarios where id = ?', [usuarioId]) //donde va el valor que es variable ponemos un ?
}



const updateById = (usuarioId, { username, email, telefono, dni, password, nombre, direccion }) => {
    return db.query('update usuarios set username = ?, email = ?, telefono = ?, dni = ?, password = ?, nombre = ?, direccion = ? where id = ?',
        [username, email, telefono, dni, password, nombre, direccion, usuarioId])

}

module.exports = {
    updateById, getById
}