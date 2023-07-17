const getById = (staffId) => {
    return db.query('select * from staff where id = ?', [staffId]) //donde va el valor que es variable ponemos un ?
}

const updateById = (staffId, { nombre, rol, usuario, password, email }) => {
    return db.query('update staff set nombre = ?, rol = ?, usuario = ?, password = ?, email = ?',
        [nombre, rol, usuario, password, email, staffId])

}

module.exports = {
    updateById, getById
}