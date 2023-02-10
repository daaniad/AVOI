import { useState } from "react";
import { initialUserState } from "../../const/homeMenu/initialUserState";

export default function SignInView() {
  const [newUser, setNewUser] = useState(initialUserState);
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

        <input
          type="text"
          placeholder="day"
          name="idSemana"
          value={newUser.idSemana}
          onChange={handleInput}
        />

        <input
          type="text"
          placeholder="turno"
          name="mañana"
          value={newUser.mañana}
          onChange={handleInput}
        />
        <button type="submit">Sign-In</button>
      </form>
    </>
  );
}
