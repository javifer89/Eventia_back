
const idStaff = (staffId) => {
    return db.query('select * from staff where id = ?', [staffId])
};

const usuarioStaff = (user) => {
    return db.query('select * from staff where usuario = ?', [user])
};


module.exports = {
    idStaff, usuarioStaff
}