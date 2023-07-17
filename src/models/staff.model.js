const insert = ({ nombre, rol, usuario, password, email }) => {
    return db.query(
        'insert into staff (nombre, rol, usuario, password, email) values (?, ?, ?, ?, ?)', [nombre, rol, usuario, password, email]
    )
};

module.exports = {
    insert
}