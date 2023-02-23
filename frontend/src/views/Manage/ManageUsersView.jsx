import { useState } from "react";

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
export default function ManageUsersView({ response,onSubmit }) {
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
      <h1>Esto es Manage Users</h1>

      {response.length >0 ? (
        response.map((user) => (
          <>
            <ol className="list-group list-group d-flex flex-row p-3">
              <div key={user.id} className="">
                <li className="list-group-item">
                  {user.nombre} {user.apellidos}
                </li>
                <button
                  onClick={(e) => handleToggle(e, user)}
                  type="button"
                  className="btn btn-primary btn-sm d-flex justify-content-center"
                >
                  Show shifts
                </button>
              </div>
              {userToShow.id === user.id && (
                <form
                  onSubmit={(e) => onSubmit( e,user.id,validateDisp)}
                  onChange={handleSelect}
                  value={user.turnos}
                  className="d-flex"
                >
                  <fieldset id="turnos">
                    <legend>Select shift:</legend>
                    {user.turnos.map((shift, index) => (
                      <div key={index}>
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

                  <button
                    type="submit"
                    className="btn btn-primary btn-sm d-flex justify-content-center"
                  >
                    Validate shift
                  </button>
                </form>
              )}
            </ol>
          </>
        ))
      ) : (
        <span>No response for now</span>
      )}
    </>
  );
}
