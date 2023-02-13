import useFetch from "../../hooks/useFetch/useFetch";
export default function ManageUsersView({ response }) {
  const updateUser = {
    validate: 1
  }
  const { object, error } = useFetch(`http://localhost:3000/user/validate/${user.id}`,{
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify()})


  return (
    <>
      <h1>Esto es Manage Users</h1>

      {response ? (
        response.map((user) => (
          <ol className="list-group list-group d-flex flex-row p-3">
            <div className="">
              <li className="list-group-item" key={user.id}>
                {user.nombre} {user.apellidos}
              </li>
            </div>
            <form className="d-flex">
              <li className="list-group-item" key={user.id}>
               {user.diasSemana}
              </li>
              <li className="list-group-item" key={user.id}>
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
        ))
      ) : (
        <span>No response for now</span>
      )}
    </>
  );
}
