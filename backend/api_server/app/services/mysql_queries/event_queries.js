import db from "../mysql.js";

const eventQueries = {};

eventQueries.addEvent = async (eventData) => {
  // Conectamos con la base de datos y añadimos el usuario.
  let conn = null;
  try {
    conn = await db.createConnection();
    // Creamos un objeto con los dats de la imagen a guardar en la base de datos.
    // Usamos la libreria momentjs para registrar la fecha actual
    let imageObj = {
      titulo: eventData.titulo,
      descripcion: eventData.descripcion,
      fecha: eventData.fecha,
      imagen: eventData.imagen,
    };
    return await db.query(
      "INSERT INTO eventos SET ?",
      imageObj,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};



eventQueries.getEventById = async (id) => {
  // Conectamos con la base de datos y buscamos si existe el producto por su id.
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM eventos WHERE id = ?",
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

eventQueries.dropEvent = async (id) => {
  // Conectamos con la base de datos y buscamos si existe la imagen por su id.
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "DELETE * FROM eventos WHERE id = ?",
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






eventQueries.fetchEvents = async () => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query("SELECT * FROM eventos",[], "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

export default eventQueries;
