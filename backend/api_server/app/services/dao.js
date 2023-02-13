import userQueries from "./mysql_queries/user_queries.js";


const dao = {};

dao.addUser = async (userData) => await userQueries.addUser(userData);

dao.getUserByEmail = async (email) => await userQueries.getUserByEmail(email);

dao.addDisp= async (dispData) => await userQueries.addDisp(dispData);

dao.manageNewUser = async () => await userQueries.manageNewUser();

dao.validate = async (id, dispData) => await userQueries.validate(id, dispData);

export default dao
