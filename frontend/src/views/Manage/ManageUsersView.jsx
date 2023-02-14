import { useState, useEffect } from "react";
export default function ManageUsersView({ response }) {
  const [validateDisp, setValidateDisp] = useState(null);
  const [error, setError] = useState(null);
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
        .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    
    fetchData();
  };

  function handleSelect(event) {
    const newValidation = {
      ...validateDisp,
      [event.target.name]: event.target.value,
    };

    setNewUser(newValidation);
  }

  return (
    <>
      <h1>Esto es Manage Users</h1>

      {response ? (
        response.map((user) => (
          <>
          <h1>{user.nombre}</h1>
          <ol className="list-group list-group d-flex flex-row p-3">
            <div className="">
              <li className="list-group-item" key={user.id}>
                {user.nombre} {user.apellidos}
              </li>
            </div>
            <form onChange={handleSelect} value={updateUser.idturno} className="d-flex">
              <li className="list-group-item" >
                {user.diasSemana}
              </li>
              <li className="list-group-item">
                {user.mañana}
              </li>
              <button
                type="button"
                className="btn btn-primary btn-sm d-flex justify-content-center"
              >
                Validate shift
              </button>
            </form>
          </ol>
          </>
        ))
      ) : (
        <span>No response for now</span>
      )}
    </>
  );
}
