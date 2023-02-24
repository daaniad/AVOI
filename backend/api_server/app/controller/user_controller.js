import { SignJWT, jwtVerify } from "jose";
import md5 from "md5";
import dao from "../services/dao.js";

const controller = {};

controller.addUser = async (req, res) => {
  const { name, surname, email, password, address, pc, availability } =
    req.body;
  if (!name || !surname || !email || !password || !address || !pc)
    return res.status(400).send("Body error");
  console.log(req.body);
  try {
    const user = await dao.getUserByEmail(email);
    if (user.length > 0)
      return res.status(409).send(`User ${name} already registered`);
    const addUser = await dao.addUser(req.body);

    
    availability.map(async function (turn) {
     const idsemana = await dao.alterDay(turn.day, Number(turn.hour));
      await dao.addDisp({
        diasSemana: Number(idsemana[0].id),
        mañana: Number(turn.hour),
        idusuario: addUser,
      });
    });

    return res.send(`User ${name} with id: ${addUser} registered successfully`);
  } catch (e) {
    console.log(e.message);
  }
};

controller.userLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).send("Error al recibir el body");
  try {
    let user = await dao.getUserByEmail(email);
    if (user.length <= 0) return res.status(404).send("Usuario no registrado");
    const custPassword = md5(password);
    [user] = user;
    if (user.password != custPassword)
      return res.status(401).send("Incorrect password");
    const jwtConstructor = new SignJWT({
      id: user.id,
      email,
      nombre: user.nombre,
      role: user.role,
    });

    const encoder = new TextEncoder();

    const jwt = await jwtConstructor
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(encoder.encode(process.env.JWT_SECRET));
    return res.send({ jwt });
  } catch (e) {
    console.log(e.message);
  }
};

controller.manageNewUser = async (req, res) => {
  try {
    return res.send(await dao.getUserToValidateAndShifts());
  } catch (e) {
    console.log(e.message);

    return res.status(404).send("No Users to validate");
  }
};

controller.validate = async (req, res) => {
  try {
    if (Object.entries(req.body).length === 0)
      return res.status(400).send("Body error");
    await dao.validate(req.params.id, req.body);
    

    return res.send(await dao.getUserToValidateAndShifts());
  } catch (e) {
    console.log(e.message);
  }
};

controller.getShiftList = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const user = await dao.getUserByShift(id);
    return res.send(user);
  } catch (e) {
    console.log(e.message);
  }
};

controller.saveAssistance = async (req, res) => {
  try {
    const assistance = await dao.saveAssistance(req.body);
    if (assistance) {
      return res.send(await dao.getUserByShift(req.body.idresponsable));
    }
  } catch (e) {
    console.log(e.message);
    res.status(400).send(e.message);
  }
};

controller.fetchAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    const date = await dao.fetchAdmin(id);
    return res.send(date);
  } catch (e) {
    console.log(e.message);
    res.status(400).send(e.message);
  }
};

controller.fetchUsersByName = async (req, res) => {
  const {nombre} = req.params;
  try {
    const user = await dao.fetchUsersByName(nombre);
    return res.send(user);
  } catch(e) {
    console.log(e.message);
    res.status(400).send(e.message)
  }
}

controller.getUsers = async (req, res) => {
  try {
    const user = await dao.getUsers();
    return res.send(user);
  } catch (e) {
    console.log(e.message);
  }
};

export default controller;
