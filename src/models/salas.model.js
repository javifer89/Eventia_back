const getById = (salaId) => {
    return db.query('select * from salas where id = ?', [salaId])
}

const updateById = (salaId, { precio, disponible, aforo, nombre, direccion }) => {
    return db.query('update salas set precio = ?, disponible = ?, aforo = ?, nombre = ?, direccion = ?',
        [precio, disponible, aforo, nombre, direccion, salaId])

}

module.exports = {
    updateById, getById
}