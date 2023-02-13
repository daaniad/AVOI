export default function ManageUsersView({ response }) {
  return (
    <>
      <h1>Esto es Manage Users</h1>

      {response ? (
        response.map((user) => (
          <ol className="list-group list-group d-flex flex-row p-3">
            <div className="">
              <li className="list-group-item" key={user.id}>
                {user.nombre} {user.apellidos} {user.diasSemana} {user.mañana}
              </li>
            </div>
            <form className="d-flex">
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
