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

userQueries.manageNewUser = async () => {
  // Conectamos con la base de datos y buscamos si existe el usuario por el email.
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM usuarios JOIN disponibilidad on usuarios.id = disponibilidad.idusuario JOIN dias on disponibilidad.idSemana = dias.id WHERE usuarios.validado = 0", [],
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
    let conn = null
try{
    conn = await db.createConnection();
    console.log(id);
    return await db.query('SELECT * FROM usuarios WHERE id = ?', id, 'select', conn)
} catch (e) {
    throw new Error(e)
} finally {
    conn && await conn.end();
    }
    };

userQueries.validate = async (dispData) => {
    let conn = null;
  try {
    conn = await db.createConnection();
    // Creamos un objeto con los datos del usuario a guardar en la base de datos.
    // Encriptamos la password con md5 y usamos la libreria momentjs para registrar la fecha actual
    console.log(dispData);
    let dispObj = {
      validado: dispData.validado,
      idturno: dispData.idturno,
    };
    return await db.query(
      "UPDATE usuarios SET ? WHERE id = ?", dispObj, dispData.id,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
}

export default userQueries;
