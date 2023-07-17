const salasReservadas = () => {
    return db.query('select * from salas where disponible = 0')
}

const salasLibres = () => {
    return db.query('select * from salas where disponible = 1')
}

const salaByid = (id) => {
    return db.query('select * from salas where id = ?', [id])
}

const usuarioSala = (id) => {
    return db.query('select * from usuarios_has_salas where usuarios_id = ?', [id])
}

module.exports = {
    salasReservadas, salasLibres, usuarioSala, salaByid
}