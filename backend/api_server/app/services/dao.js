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

dao.fetchUsersByName = async(nombre) => await userQueries.fetchUsersByName(nombre)

dao.validate = async (id, dispData) => await userQueries.validate(id, dispData);


dao.getUserToValidate = async () => await userQueries.getUserToValidate();

dao.getUserShift = async () => await userQueries.getUserShift();

dao.getUserByShift = async (id) => await userQueries.usersByShift(id);

dao.saveAssistance = async (assistData) => await userQueries.saveAssistance(assistData);

dao.fetchAdmin = async(id) => await userQueries.fetchAdmin(id);

dao.getUserById = async (id) => await userQueries.getUserById(id);

dao.getUsers = async () => await userQueries.getUsers();

dao.alterDay = async (day, hour) => await userQueries.alterDay(day, hour);

// EVENTS
// events queries daos'

dao.addEvent = async (eventData) => await eventQueries.addEvent(eventData);

//Obtener imagen por su id
dao.getEventById = async (id) => await eventQueries.getEventById(id);

dao.fetchEvents = async() => await eventQueries.fetchEvents();


dao.updateEvent = async(id, eventData) => await eventQueries.updateEvent(id, eventData)
export default dao;
