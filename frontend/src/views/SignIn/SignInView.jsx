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
      <div className="container">
        <div className="d-flex justify-content-center">
          <form className="row g-3" onSubmit={signIn}>
            <div className="form-group col-md-6">
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="nombre"
                value={newUser.name}
                onChange={handleInput}
              />
            </div>
            <div className="form-group col-md-6">
              <input
                className="form-control"
                type="text"
                name="surname"
                required
                placeholder="apellidos"
                value={newUser.surname}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">

            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="email"
              value={newUser.email}
              onChange={handleInput}
            />
            </div>
            <div className="form-group">

            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              name="password"
              value={newUser.password}
              onChange={handleInput}
            />
            </div>
            <div className="form-group">

            <input
              type="text"
              className="form-control"
              placeholder="dirección"
              name="address"
              value={newUser.address}
              onChange={handleInput}
            />
            </div>
            <div className="form-group col-md-2">

            <input
              type="text"
              className="form-control"
              placeholder="CP"
              name="pc"
              value={newUser.pc}
              onChange={handleInput}
            />
            </div>
            <ul>
              {formValues.map((obj, index) => (
                <>
                <div className="d-flex justify-content-start" key={index}>
                  <div className="form-group col-9">

                  <li className="form-control mb-3">
                    Dia de la semana: {dayWeek[obj.day]} en horario:{" "}
                    {hour[obj.hour]}
                  </li>
                  </div>
                  <div className="ms-4">

                  <button className="btn btn-danger" onClick={(e) => handleDeleteField(e, index)}>
                    X
                  </button>
                  </div>
                  </div>
                </>
              ))}
            </ul>
            {!toggle ? (
              <div>
                <button className="btn btn-primary" onClick={addBtnClick}>Crear turno</button>
              </div>
            ) : (
              <div className="dialog-box form-group">
                <select className="form-control col-md-6" ref={dayRef} name="idSemana">
                  <option value="">Selecciona un dia de la semana</option>
                  <option value="L">Lunes</option>
                  <option value="M">Martes</option>
                  <option value="X">Miercoles</option>
                  <option value="J">Jueves</option>
                  <option value="V">Viernes</option>
                  <option value="S">Sabado</option>
                  <option value="D">Domingo</option>
                </select>
                <select className="form-control mt-3 col-md-6" ref={hourRef} name="mañana">
                  <option value="">Selecciona un turno</option>
                  <option value={1}>Mañana</option>
                  <option value={0}>Tarde</option>
                </select>
                <div>

                <button className="btn btn-primary mt-3 row-3" onClick={handleAddField}>
                  Añadir turno
                </button>
                </div>
              </div>
            )}
            <div className="form-group">

            <button className="btn btn-success form-control" type="submit">Sign-In</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
