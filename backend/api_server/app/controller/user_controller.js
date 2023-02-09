import { SignJWT, jwtVerify } from "jose";
import md5 from "md5";
import dao from "../services/dao.js";


const controller = {};

controller.addUser = async (req, res) => {
    const {name, surname, email, password, address, pc} = req.body;
    if (!name || !surname || !email || !password || !address || !pc)
    return res.status(400).send("Body error");

    try {
        const user = await dao.getUserByEmail(email);
        if (user.length > 0) return res.status(409).send(`User ${name} already registered`)
        const addUser = await dao.addUser(req.body);
        if (addUser)
        return res.send(`User ${name} with id: ${addUser} registered successfully`);
    } catch(e) {
        console.log(e.message);
    }
}

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




export default controller