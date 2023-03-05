import { useState } from "react";
import "./manage.css";
const dayWeek = {
  1: "Lunes",
  2: "Lunes",
  3: "Martes",
  4: "Martes",
  5: "Miercoles",
  6: "Miercoles",
  7: "Jueves",
  8: "Jueves",
  9: "Viernes",
  10: "Viernes",
  11: "Sabado",
  12: "Sabado",
  13: "Domingo",
  14: "Domingo",
};

const hour = {
  1: "Mañana",
  0: "Tarde",
};
export default function ManageUsersView({ response, onSubmit }) {
  const [validateDisp, setValidateDisp] = useState(null);
  const [userToShow, setUserToShow] = useState(false);

  function handleSelect(event) {
    setValidateDisp(event.target.value);
  }

  function handleToggle(e, user) {
    e.preventDefault();

    setUserToShow(user);
  }

  return (
    <>
      <div className="d-flex justify-content-center text-center">
        <h1>Estos son los usuarios que faltan por validar</h1>
      </div>

      {response.length > 0 ? (
        response.map((user) => (
          <>
            <ol className="d-flex align-items-center text-center justify-content-center flex-row p-3">
              <div
                key={user.id}
                className="rounded-pill bg-white p-2"
              >
                <div className="">

                <li className="no-list">
                  {user.nombre.replace(/^\w/, (c) => c.toUpperCase())}{" "}
                  {user.apellidos.replace(/^\w/, (c) => c.toUpperCase())}
                </li>
                </div>

                <div className="d-flex align-items-center">

                <button
                  onClick={(e) => handleToggle(e, user)}
                  type="button"
                  className="btn rounded-pill btn-primary btn-sm"
                >
                  Mostrar turnos
                </button>
                </div>
                  </div>
              {userToShow.id === user.id && (
                <form
                  onSubmit={(e) => onSubmit(e, user.id, validateDisp)}
                  onChange={handleSelect}
                  value={user.turnos}
                  className="d-flex"
                >
                  <fieldset className="text-center nombre-titulo p-3 m-4" id="turnos">
                    <h2>Seleccionar turno para {user.nombre}:</h2>
                    {user.turnos.map((shift, index) => (
                      <div
                        className="d-flex justify-content-center"
                        key={index}
                      >
                        <input
                          type="radio"
                          id={shift.idDisponibilidad}
                          name="turnos"
                          value={shift.idDisponibilidad}
                        />
                        <label htmlFor={shift.idDisponibilidad}>
                          {dayWeek[shift.idSemana]} en el turno de{" "}
                          {hour[shift.mañana]}
                        </label>
                      </div>
                    ))}
                  </fieldset>
                  <div className="m-3 d-flex text-center align-items-center">
                    <button
                      type="submit"
                      className="btn btn-success btn-sm d-flex justify-content-center"
                    >
                      Validate shift
                    </button>
                  </div>
                </form>
              )}
            </ol>
          </>
        ))
      ) : (
        <div className="d-flex justify-content-center text-center">
          <span>Todos los usuarios han sido validados. ¡Buen trabajo!</span>
        </div>
      )}
    </>
  );
}
