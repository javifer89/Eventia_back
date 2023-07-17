const insert = ({ precio, disponible, aforo, nombre, direccion }) => {

    return db.query(
        'insert into salas (precio, disponible, aforo, nombre, direccion) values (?, ?, ?, ?, ?)', [precio, disponible, aforo, nombre, direccion]
    )

};

module.exports = {
    insert
}