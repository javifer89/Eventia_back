const usuarioByid = (id) => {
    return db.query('select * from usuarios where id = ?', [id])
}

const usuarioByDNI = (dni) => {
    return db.query('select * from usuarios where dni = ?', [dni])
}


module.exports = {
    usuarioByid, usuarioByDNI
}