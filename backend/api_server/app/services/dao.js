import userQueries from "./mysql_queries/user_queries.js";


const dao = {};

dao.addUser = async (userData) => await userQueries.addUser(userData);

dao.getUserByEmail = async (email) => await userQueries.getUserByEmail(email);

export default dao
