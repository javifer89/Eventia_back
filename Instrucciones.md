### RUTAS 
-fichero /routes/api.js
-ficheros /routes/api/salas.js, /routes/api/staff.js y routes/api/usuarios.js

## SALAS
    ## OBTENER SALAS
    - GET /api/salas/:SALAID
    - GET /api/salas/usuario/:USERSALA
    - GET /api/salas/reservadas
    - GET /api/salas/libres
  
    ## AÑADIR SALAS
    - POST /api/salas/
    - POST /api/salas/comprobar_salas (para recuperar salas disponibles)

    ## EDITAR SALAS
    - PUT /api/salas/:SALAID

    ## ELIMINAR SALAS
    - DELETE /api/salas/:SALAID

## STAFF
    ## OBTENER STAFF
    - GET /api/staff/:USUARIO
    - GET /api/staff/:STAFFID
   
    ## AÑADIR STAFF
    - POST /api/staff/registro
    - POST /api/staff/login

    ## EDITAR STAFF
    - PUT /api/staff/:STAFFID

    ## ELIMINAR STAFF
    - DELETE /api/staff/:STAFFID

## USUARIOS
    ## OBTENER USUARIOS
    - GET /api/usuarios/
    - GET /api/usuarios/:USUARIOID
    - GET /api/usuarios/:DNIUSUARIO
   
    ## AÑADIR USUARIOS
    - POST /api/usuarios/registro
    - POST /api/usuarios/login

    ## EDITAR USUARIOS
    - PUT /api/usuarios/:USUARIOID

    ## ELIMINAR USUARIOS
    - DELETE /api/usuarios/:USUARIOID

RUTAS

-fichero /routes/api.js
-ficheros /routes/api/clientes.js y /routes/api/monitores.js

-GET /api/clientes
-POST /api/clientes
-PUT /api/clientes
-DELETE /api/clientes

-GET /api/monitores
-POST /api/monitores
-PUT /api/monitores
-DELETE /api/monitores



### Creación del monitor
 POST /api/monitores
 Body: nombre, experiencia

### Actualización del monitor
PUT /api/monitores/MONITORID
Body: nombre, experiencia

### Borrado del monitor
DELETE /api/monitores/MONITORID


## Registro
POST /api/staff/registro
Body: usuario, email, password


## Recuperar los clientes de un usuario concreto

GET /api/clientes/staff

- Retorna un array con los clientes asociados al usuario del staff logado


## Recuperar la lista de los nombres de los clientes del usuario logado

GET /api/clientes/staff/nombres

-Recupera un array con únicamente los nombres de los clientes asociados al usuario logado

```js
['Martina', 'Lorenzo',...]
``` 
