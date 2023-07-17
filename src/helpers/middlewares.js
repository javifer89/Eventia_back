const jwt = require('jsonwebtoken');

const Usuario = require("../models/usuarios.model");
const Staff = require("../models/staff.model");


// const checkUsuarioId = async (req, res, next) => {
//   const { UsuarioId } = req.params;
//   const [usuarios] = await Usuario.getById(usuarioId);

//   if (usuarios.length === 0) {
//     return res.send({ fatal: "El usuario no existe" });
//   }
//   next();
// };

const checkToken = async (req, res, next) => {
  //1. comprobamos si el token viene incluido en la petición (headers -Authorization)
  // console.log('Pasa por el checkToken');
  if (!req.headers["authorization"]) {
    return res.json({ fatal: "Necesitas la cabecera de autorización" });
  }
  const token = req.headers["authorization"];
  //2. Comprobamos si el token es correcto
  //3. Comprobamos si el token está caducado (opcional)
  let obj;
  try {
    obj = jwt.verify(token, "esta es la verificación del token");
  } catch (error) {
    res.json({ fatal: "El token es incorrecto" });
  }
  console.log(obj);
  //4. Recuperamos el USUARIO asociado al token
  //Función que recupere de la BD el usuario de su ID (getById)
  const [staff] = await Staff.getById(obj.usuarioId);
  req.user = staff[0];
  //si logramos pasar las comprobaciones del Middleware checkToken, a partir de ahí tendremos acceso SIEMPRE a req.user
  //req.user es el valor del usuario LOGADO en la aplicación
  next();
};

const checkLogin = async (req, res) => {
  //existe el email en la base de datos?
  const [staff] = await Staff.getByEmail(req.body.email);
  if (staff.length === 0) {
    return res.json({ fatal: error.message });
  }

  //TODO REVISAR EL user.rol
  const user = staff[0];

  //Comprobar si las password coinciden
  const iguales = bcrypt.compareSync(req.body.password, user.password);
  if (!iguales) {
    return res.json({ fatal: "error en el email y/o contraseña" });
  }
  res.json({
    succes: "Login correcto",
    token: createToken(user),
  });
};



module.exports = {
  // checkUsuarioId,
  checkToken,
  checkLogin
};
