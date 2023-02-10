import { useState } from "react";
import { useCheckLoginContext } from "../../contexts/AuthContext/loginContext";


export default function LoginView() {
  const { login } = useCheckLoginContext();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });


  function handleCredentials(event) {
    const newCredentials = {
      ...credentials,
      [event.target.name]: event.target.value,
    };

    setCredentials(newCredentials);
  }

  



  

  return (
    <>
      <div>
        <h2 className="">Esto es el Login</h2>
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
    </>
  );
}
