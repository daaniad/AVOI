import { useState } from "react";

const dayWeek = {
  1: "Lunes",
  2: "Martes",
  3: "Miercoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sabado",
  7: "Domingo",
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

      {response ? (
        response.map((user, index) => (
          <>
            <ol className="list-group list-group d-flex flex-row p-3">
              <div className="">
                <li className="list-group-item" key={user.id}>
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
                    <legend>Select a maintenance drone:</legend>
                    {user.turnos.map((shift) => (
                      <div>
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

                  {/* <li key={user.id} className="list-group-item">
                    {userToShow.turnos}
                  </li>
                  <li key={user.id} className="list-group-item">
                    {userToShow.mañana}
                  </li> */}
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
