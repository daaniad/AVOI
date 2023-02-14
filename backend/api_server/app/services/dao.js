import userQueries from "./mysql_queries/user_queries.js";
import productQueries from "./mysql_queries/product_queries.js";


const dao = {};

dao.addUser = async (userData) => await userQueries.addUser(userData);

dao.getUserByEmail = async (email) => await userQueries.getUserByEmail(email);

dao.addDisp= async (dispData) => await userQueries.addDisp(dispData);

dao.manageNewUser = async () => await userQueries.manageNewUser();

dao.validate = async (id, dispData) => await userQueries.validate(id, dispData);


dao.addEvent = async (eventData) => await productQueries.addEvent(eventData);

//Obtener imagen por su id
dao.getImageById = async (id) => await productQueries.getImageById(id);

// Obtener producto por su referencia
dao.getProductByRef = async (reference) => await productQueries.getProductByRef(reference);

// Añadir producto
dao.insertProduct = async (productData) => await productQueries.addProduct(productData);

dao.getProduct = async () => await productQueries.getProduct();

dao.getProductById = async (id) => await productQueries.getProductById(id);



export default dao
