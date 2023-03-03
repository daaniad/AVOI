import { useCheckLoginContext } from "../../contexts/AuthContext/loginContext";
import { useEffect, useState } from "react";
export default function ShiftView() {
  const [userDate, setUserDate] = useState(null);
  const { authorization } = useCheckLoginContext();
  const style = {
    transform: 'rotate(180deg)' , 
    transition: 'transform 150ms ease', // smooth transition
   }

  useEffect(function () {
    async function fetchUsers() {
      const response = await fetch(
        `http://localhost:3000/user/shift/${authorization.id}`
      );
      const data = await response.json();
      setUserDate(data);
    }
    fetchUsers();
  }, []);

  let currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  const day = ("0" + currentDate.getDate()).slice(-2);
  const fechaEnFormatoYYYYMMDD = `${year}-${month}-${day}`;
  

  async function saveAssistance(e, id) {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/user/assistance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idusuarios: id, idresponsable: authorization.id }),
    });
    if (res.status === 401) {
      throw "Not authorized";
    } else if (res.status === 200) {
      alert(`user with id: ${id} saved successfully`);
      const data = await res.json()
      setUserDate(data);
      data.map((user) => (

        console.log( fechaEnFormatoYYYYMMDD, user.fAsists, "fecha")
      ))
    }
  }
  
  return (
    <>
    <div className="d-flex justify-content-center text-center">

      <h1>Estos son los voluntarios para tu turno</h1>
    </div>

    <div className="d-flex justify-content-center mt-4 align-items-center">
 <i style={style} className="bi fs-1 bi-hand-index-thumb text-success"></i>
</div>

      {userDate?.map((user) => (
        <div className="d-flex justify-content-center" key={user.id}>
          

          <h3 className="m-4">
            {user.nombre.replace(/^\w/, (c) =>
                      c.toUpperCase()
                    )} {user.apellidos.replace(/^\w/, (c) =>
                    c.toUpperCase()
                  )}
          </h3>
          {user.fAsist === null ||
          fechaEnFormatoYYYYMMDD != user.fAsist.split("T")[0] ? (
            <div className="align-items-center d-flex">

            <button className="btn btn-primary"
              name="idusuarios"
              onClick={(e) => saveAssistance(e, user.id)}
              
            >
              V
            </button>
            </div>
          ) : (
            <p>Validado</p>
          )}
        </div>
      ))}
    </>
  );
}
