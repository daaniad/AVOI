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
      <div className="container">
        <div className="d-flex justify-content-center">

        <form className="form-group" onSubmit={(e) => login(e, credentials)}>
          <label className="mt-5">Email</label>
          <input
          className="form-control"
            type="email"
            name="email"
            required
            value={credentials.email}
            onChange={handleCredentials}
          />
          <label className="mt-5">Contraseña</label>
          <input
          className="form-control"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleCredentials}
          />
          <div className="form-group row justify-content-center">

          <button className="btn btn-lg mt-5 btn-success col-6" type="submit">Acceder</button>
          </div>
        </form>
        </div>
        
        
      </div>
    </>
  );
}
