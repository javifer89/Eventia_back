### RUTAS 
-fichero /routes/api.js
-ficheros /routes/api/salas.js, /routes/api/staff.js y routes/api/usuarios.js

## SALAS
    ## OBTENER SALAS
    - GET /api/salas/
    - GET /api/salas/usuario/:SALAID
  
    ## AÑADIR SALAS
    - POST /api/salas/

    ## EDITAR SALAS
    - PUT /api/salas/editar/:SALAID

    - POST /api/salas/comprobar_salas (para recuperar salas disponibles)


    ## ELIMINAR SALAS
    - DELETE /api/salas/:SALAID


## USUARIOS
    ## OBTENER USUARIOS
    - GET /api/usuarios/
    - GET /api/usuarios/:USUARIOID
    - GET /api/usuarios/dni/:DNIUSUARIO
   
    ## AÑADIR USUARIOS
    - POST /api/usuarios/registro
    - POST /api/usuarios/login

    ## EDITAR USUARIOS
    - PUT /api/usuarios/editar/:USUARIOID

    ## ELIMINAR USUARIOS
    - DELETE /api/usuarios/:USUARIOID

## STAFF
    ## OBTENER STAFF
    - GET /api/staff/
    - GET /api/staff/id/:USUARIO
    - GET /api/staff/:STAFFID
   
    ## AÑADIR STAFF
    - POST /api/staff/registro
    - POST /api/staff/login

    ## EDITAR STAFF
    - PUT /api/staff/editar/:STAFFID

    ## ELIMINAR STAFF
    - DELETE /api/staff/:STAFFID
