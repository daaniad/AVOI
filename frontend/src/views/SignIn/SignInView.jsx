import { useState } from "react";
import { initialUserState } from "../../const/homeMenu/initialUserState";

export default function SignInView() {
  const [newUser, setNewUser] = useState(initialUserState);
  const [selects, setInputs] = useState([]);

  async function signIn(e) {
    e.preventDefault();

    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    }).then((response) => {
      console.log(response.status);
      if (response.status === 401) {
        throw "No autorizado";
      } else if (response.status === 200) {
        alert(`User ${newUser.name} signed-in successfully`);
        setNewUser(initialUserState);
      } else if (response.status === 409) {
        alert(`Usuario ya registrado`);
      }
    });
  }


  const handleAddInput = () => {
    setInputs([...selects, ""]);
  };
  
  
  function handleInput(event) {
    const newSignIn = {
      ...newUser,
      [event.target.name]: event.target.value,
    };
    
    setNewUser(newSignIn);
  }
  return (
    <>
      <h1>Esto es SignIn</h1>
      <form onSubmit={signIn}>
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

    {selects.map((select, index) => (
      <>
      <select onChange={handleInput} value={newUser.idSemana} name={`idSemana-${index}`}>
            <option value="1">Lunes</option>
            <option value="2">Martes</option>
            <option value="3">Miércoles</option>
            <option value="4">Jueves</option>
            <option value="5">Viernes</option>
            <option value="6">Sábado</option>
            <option value="7">Domingo</option>
          </select>

        <select onChange={handleInput} value={newUser.mañana} name={`mañana-${index}`}>
          <option value="1">Mañana</option>
          <option value="0">Tarde</option>
        </select>
      </>
    ))}
    <button onClick={handleAddInput}>Agregar campo</button>
        {/* <select onChange={handleInput} value={newUser.idSemana} name="idSemana">
          <option value="1">Lunes</option>
          <option value="2">Martes</option>
          <option value="3">Miércoles</option>
          <option value="4">Jueves</option>
          <option value="5">Viernes</option>
          <option value="6">Sábado</option>
          <option value="7">Domingo</option>
        </select> */}

        <button type="submit">Sign-In</button>

       
    
      </form>
    </>
  );
}
