const getForm = (formId) => {
  return db.query("select * from datos_formulario_contacto where id = ?",[formId]);
};

const insert = ({nombre, apellidos, email, mensaje}) => {
  return db.query(
    "insert into datos_formulario_contacto ( nombre, apellidos, email, mensaje) values (?, ?, ?, ?)",
    [nombre, apellidos, email, mensaje]
  );
};


module.exports = {
    insert,
    getForm
};
