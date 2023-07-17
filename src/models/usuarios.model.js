

const insert = ({ nombre, direccion, email, telefono, dni, username, password }) => {

    return db.query(
        'insert into usuarios (nombre, direccion, email, telefono, dni, username, password) values (?, ?, ?, ?, ?, ?, ?)',
        [nombre, direccion, email, telefono, dni, username, password]
    )
};

module.exports = {
    insert
}