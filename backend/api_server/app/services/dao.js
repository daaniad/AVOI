import userQueries from "./mysql_queries/user_queries.js";
import eventQueries from "./mysql_queries/event_queries.js";

const dao = {};

// user queries daos'

dao.addUser = async (userData) => await userQueries.addUser(userData);

dao.getUserByEmail = async (email) => await userQueries.getUserByEmail(email);

dao.addDisp = async (dispData) => await userQueries.addDisp(dispData);

dao.manageNewUser = async () => await userQueries.manageNewUser();

dao.getUserToValidateAndShifts = async () => {
  let userToValidate = await dao.getUserToValidate();
  let shift = await dao.getUserShift();

  if (userToValidate.length <= 0) {
    throw "No user to validate";
  }

  return userToValidate.map((user) => {
    return {
      id: user.id,
      nombre: user.nombre,
      apellidos: user.apellidos,
      turnos: shift.filter((userTurn) => userTurn.id === user.id),
    };
  });
};

dao.getShiftList = async (id) => await userQueries.getShiftList(id); 


// events queries daos'

dao.validate = async (id, dispData) => await userQueries.validate(id, dispData);

dao.addEvent = async (eventData) => await eventQueries.addEvent(eventData);

//Obtener imagen por su id
dao.getImageById = async (id) => await eventQueries.getImageById(id);

// Obtener producto por su referencia
dao.getProductByRef = async (reference) =>
  await eventQueries.getProductByRef(reference);

// Añadir producto
dao.insertProduct = async (productData) =>
  await eventQueries.addProduct(productData);

dao.getProduct = async () => await eventQueries.getProduct();

dao.getProductById = async (id) => await eventQueries.getProductById(id);

dao.getUserToValidate = async () => await userQueries.getUserToValidate();

dao.getUserShift = async () => await userQueries.getUserShift();

dao.getUserByShift = async (id) => await userQueries.usersByShift(id);

dao.saveAssistance = async (assistData) => await userQueries.saveAssistance(assistData);

dao.fetchUserDate = async(id) => await userQueries.fetchUserDate(id);

dao.getUsers = async () => await userQueries.getUsers();

export default dao;
