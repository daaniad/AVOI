import { useState, useRef } from "react";
import { initialUserState } from "../../const/homeMenu/initialUserState";

const dayWeek = {
  L: "Lunes",
  M: "Martes",
  X: "Miercoles",
  J: "Jueves",
  V: "Viernes",
  S: "Sabado",
  D: "Domingo",
};

const hour = {
  1: "Mañana",
  0: "Tarde",
};

export default function SignInView() {
  const [newUser, setNewUser] = useState(initialUserState);
  const [formValues, setFormValues] = useState([]);
  const [toggle, setToggle] = useState(false);

  const dayRef = useRef();
  const hourRef = useRef();

  function handleAddField(e) {
    e.preventDefault();
    const values = [
      ...formValues,
      {
        day: dayRef.current.value || "",
        hour: hourRef.current.value || "",
      },
    ];
    setFormValues(values);
    setToggle(false);
  }

  function handleDeleteField(e, index) {
    const values = [...formValues];
    values.splice(index, 1);
    setFormValues(values);
  }

  function addBtnClick(e) {
    e.preventDefault();
    setToggle(true);
  }

  async function signIn(e) {
    e.preventDefault();
    const user = {
      ...newUser,
      availability: formValues,
    };

    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
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
        <ul>
          {formValues.map((obj, index) => (
            <div key={index}>
              <li>
                Dia de la semana: {dayWeek[obj.day]} en horario:{" "}
                {hour[obj.hour]}
              </li>

              <button onClick={(e) => handleDeleteField(e, index)}>X</button>
            </div>
          ))}
        </ul>
        {!toggle ? (
          <div>
            <button onClick={addBtnClick}>Add New</button>
          </div>
        ) : (
          <div className="dialog-box">
            <select ref={dayRef} name="idSemana">
              <option value="">Selecciona un dia de la semana</option>
              <option value="L">Lunes</option>
              <option value="M">Martes</option>
              <option value="X">Miercoles</option>
              <option value="J">Jueves</option>
              <option value="V">Viernes</option>
              <option value="S">Sabado</option>
              <option value="D">Domingo</option>
            </select>
            <select ref={hourRef} name="mañana">
              <option value="">Selecciona un turno</option>
              <option value={1}>Mañana</option>
              <option value={0}>Tarde</option>
            </select>
            <button className="add-btn" onClick={handleAddField}>
              Add
            </button>
          </div>
        )}

        <button type="submit">Sign-In</button>
      </form>
    </>
  );
}
