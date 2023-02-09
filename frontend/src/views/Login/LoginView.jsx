import { useState } from "react";
import { useCheckLoginContext } from "../../contexts/AuthContext/loginContext";
const initialUserState = {
  email: "",
  password: "",
  name: "",
  surname: "",
  address:"",
  pc:""
};

export default function LoginView() {
  const { login, signIn, authorization } = useCheckLoginContext();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [newUser, setNewUser] = useState(initialUserState);

  function handleCredentials(event) {
    const newCredentials = {
      ...credentials,
      [event.target.name]: event.target.value,
    };

    setCredentials(newCredentials);
  }

  function handleInput(event) {
    const newSignIn = {
      ...newUser,
      [event.target.name]: event.target.value,
    };

    setNewUser(newSignIn);
  }

  

  return (
    <>
      <div>
        <h2 className="text-white">Esto es el Login</h2>
        <form onSubmit={(e) => login(e, credentials)}>
          <input
            type="email"
            name="email"
            required
            value={credentials.email}
            onChange={handleCredentials}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleCredentials}
          />
          <button type="submit">Login</button>
        </form>
        
        
      </div>

      <div>
        <h2 className="text-white">Esto es el SignIn</h2>
        <form onSubmit={(e) => signIn(e, newUser)}>
          <input
            type="text"
            name="name"
            placeholder="nombre"
            value={newUser.name}
            onChange={handleInput}
          />
          <input
            type="text"
            name="surname"
            required
            placeholder="apellidos"
            value={newUser.surname}
            onChange={handleInput}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={newUser.email}
            onChange={handleInput}
          />
          <input
            type="password"
            placeholder="pass"
            name="password"
            value={newUser.password}
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="dirección"
            name="address"
            value={newUser.address}
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="CP"
            name="pc"
            value={newUser.pc}
            onChange={handleInput}
          />
          <button type="submit">Sign-In</button>
        </form>
      </div>
    </>
  );
}
