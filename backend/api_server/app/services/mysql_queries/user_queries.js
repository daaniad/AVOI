import db from "../mysql.js";
import moment from "moment/moment.js";
import md5 from "md5";
// import utils from "../../utils/utils.js";

const userQueries = {};

userQueries.getUserByEmail = async (email) => {
  // Conectamos con la base de datos y buscamos si existe el usuario por el email.
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM usuarios WHERE email = ?",
      email,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.addUser = async (userData) => {
  // Conectamos con la base de datos y añadimos el usuario.
  let conn = null;
  try {
    conn = await db.createConnection();
    // Creamos un objeto con los datos del usuario a guardar en la base de datos.
    // Encriptamos la password con md5 y usamos la libreria momentjs para registrar la fecha actual
    console.log(userData);
    let userObj = {
      nombre: userData.name,
      apellidos: userData.surname,
      domicilio: userData.address,
      cp: userData.pc,
      email: userData.email,
      password: md5(userData.password),
      fechaAlta: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
    return await db.query(
      "INSERT INTO usuarios SET ?",
      userObj,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.addDisp = async (dispData) => {
  // Conectamos con la base de datos y añadimos el usuario.
  let conn = null;
  try {
    conn = await db.createConnection();
    // Creamos un objeto con los datos del usuario a guardar en la base de datos.
    // Encriptamos la password con md5 y usamos la libreria momentjs para registrar la fecha actual
    console.log(dispData);
    let dispObj = {
      idSemana: dispData.diasSemana,
      mañana: dispData.mañana,
      idusuario: dispData.idusuario,
    };
    return await db.query(
      "INSERT INTO disponibilidad SET ?",
      dispObj,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

// Query con array= json_arrayagg(disponibilidad.idSemana) as idSemana, json_arrayagg(disponibilidad.mañana) as mañana ...  group by disponibilidad.idusuario
userQueries.manageNewUser = async () => {
  // Conectamos con la base de datos y buscamos si existe el usuario por el email.
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT usuarios.id, usuarios.nombre, usuarios.apellidos, dias.diasSemana, disponibilidad.mañana, disponibilidad.id as idDisponibilidad FROM avoi.usuarios JOIN disponibilidad on usuarios.id = disponibilidad.idusuario JOIN dias on disponibilidad.idSemana = dias.id WHERE usuarios.validado = 0",
      [],
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.getUserToValidate = async () => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT usuarios.id, usuarios.nombre, usuarios.apellidos FROM usuarios WHERE validado = 0",
      [],
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.getUserShift = async () => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT usuarios.id, disponibilidad.idSemana, disponibilidad.mañana, disponibilidad.id as idDisponibilidad FROM usuarios JOIN disponibilidad on usuarios.id = disponibilidad.idusuario",
      [],
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.getUserById = async (id) => {
  // Conectamos con la base de datos y buscamos si existe el usuario por el email.
  let conn = null;
  try {
    conn = await db.createConnection();
    console.log(id);
    return await db.query(
      "SELECT * FROM usuarios WHERE id = ?",
      id,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.validate = async (id, dispData) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    // Creamos un objeto con los datos del usuario a guardar en la base de datos.
    // Encriptamos la password con md5 y usamos la libreria momentjs para registrar la fecha actual
    console.log(dispData);
    let dispObj = {
      validado: 1,
      idturno: dispData.idturno,
    };
    return await db.query(
      "UPDATE usuarios SET ? WHERE id = ?",
      [dispObj, id],
      "update",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.usersByShift = async (id) => {
  // Trae usuarios del turno del responsable
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT usuarios.id, usuarios.nombre, usuarios.apellidos, usuarios.idturno, asistencia.fAsist FROM usuarios LEFT JOIN asistencia on usuarios.id = asistencia.idusuarios JOIN disponibilidad on disponibilidad.id = usuarios.idturno WHERE idSemana = (SELECT id from dias WHERE responsable = ?) and mañana = (SELECT mañana FROM dias WHERE responsable = ?) and usuarios.validado = 1",
      [id,id],
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};
// Query con fecha
// SELECT usuarios.id, usuarios.nombre, usuarios.apellidos, usuarios.idturno, asistencia.fAsist FROM usuarios JOIN asistencia on usuarios.id = asistencia.idusuarios JOIN disponibilidad on asistencia.idusuarios = disponibilidad.idusuario JOIN dias on disponibilidad.idSemana = dias.id WHERE dias.responsable = ?

userQueries.getUsers = async () => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT usuarios.id, usuarios.nombre, usuarios.apellidos FROM usuarios WHERE role = 1",
      [],
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.saveAssistance = async (idusuarios) => {
  let conn = null;

  let assistObj = {
    idusuarios: idusuarios,
    fAsist: moment().format("YYYY-MM-DD HH:mm:ss"),
  };
  try {
    conn = await db.createConnection();
    return await db.query(
      "INSERT INTO asistencia SET ?",
      assistObj,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};
userQueries.updateAssistance = async (idusuario) => {
  let conn = null;

  let assistObj = {
    idusuarios:idusuario,
    fAsist: moment().format("YYYY-MM-DD HH:mm:ss"),
  };
  try {
    conn = await db.createConnection();
    return await db.query(
      "UPDATE asistencia SET ? WHERE idusuarios = ?",
     [ assistObj.fAsist, assistObj.idusuarios],
      "update",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};
userQueries.getAssistanceByUserId = async (idusuario) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM asistencia WHERE idusuarios = ?",
      idusuario,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.fetchAdmin = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM usuarios WHERE id = (SELECT responsable FROM dias JOIN disponibilidad on dias.id = disponibilidad.idSemana JOIN usuarios on disponibilidad.id = usuarios.idturno  WHERE usuarios.id = ? )",
      id,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.alterDay = async (day, hour) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT dias.id FROM dias Where diasSemana = ? and mañana = ?",
      [day, hour],
      "select",
      conn
    )
  } catch(e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.fetchUsersByName = async (nombre) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "Select * FROM usuarios WHERE nombre = ?", nombre, "select", conn
    )
  } catch(e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
}

export default userQueries;
