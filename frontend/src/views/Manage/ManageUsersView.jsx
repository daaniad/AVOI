import { useState, useEffect } from "react";
export default function ManageUsersView({ response }) {
  const [validateDisp, setValidateDisp] = useState(null);
  const [error, setError] = useState(null);
  const [userToShow, setUserToShow] = useState(false);
  const updateUser = {
    validate: 1,
  };

  async function fetchData() {
    const response = await fetch(
      `http://localhost:3000/user/validate/${response.id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    fetchData();
  }

  function handleSelect(event) {
    const newValidation = {
      ...validateDisp,
      [event.target.name]: event.target.value,
    };

    setNewUser(newValidation);
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
              {userToShow.idusuario === user.idusuario && (
                <form
                  onChange={handleSelect}
                  value={updateUser.idturno}
                  className="d-flex"
                >
                  <li key={user.id} className="list-group-item">
                    {userToShow.diasSemana}
                  </li>
                  <li key={user.id} className="list-group-item">
                    {userToShow.mañana}
                  </li>
                  <button
                    type="button"
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
