const getStaff = () => {
  return db.query("select * from staff");
};

const getStaffById = (staffId) => {
  return db.query("select * from staff where id = ?", [staffId]);
};

const getByUsuario = (userName) => {
  return db.query("select * from staff where usuario = ?", [userName]);
};

const deleteById = (staffId) => {
  return db.query("delete from staff where id = ?", [staffId]);
};

const getById = (staffId) => {
  return db.query("select * from staff where id = ?", [staffId]); //donde va el valor que es variable ponemos un ?
};

const updateById = (staffId, { nombre, rol, usuario, email }) => {
  return db.query(
    "update staff set nombre = ?, rol = ?, usuario = ?, email = ? where id = ?",
    [nombre, rol, usuario, email, staffId]
  );
};

const insert = ({ nombre, rol, usuario, password, email }) => {
  return db.query(
    "insert into staff (nombre, rol, usuario, password, email) values (?, ?, ?, ?, ?)",
    [nombre, rol, usuario, password, email]
  );
};

const getByEmail = (email) => {
  return db.query("select * from staff where email = ?", [email]);
};


const aceptarStaffById = (staffId, aceptada) => {
  return db.query("update staff set aceptada = ? where id = ?", [
    aceptada,
    staffId,
  ]);
};

const aceptarUsuarioById = (usuarioId, aceptada) => {
  return db.query(
    "update usuarios set aceptada = ? where id = ?",
    [aceptada, usuarioId]
  );
};

module.exports = {
  getStaff,
  getStaffById,
  getByUsuario,
  deleteById,
  updateById,
  getById,
  insert,
  getByEmail,
  aceptarStaffById,
  aceptarUsuarioById,
};
