import { useCheckLoginContext } from "../../contexts/AuthContext/loginContext";
import { useEffect, useState } from "react";
export default function ShiftView() {
  const [userDate, setUserDate] = useState(null);
  const { authorization } = useCheckLoginContext();

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
  console.log(fechaEnFormatoYYYYMMDD);

  async function saveAssistance(e, id) {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/user/assistance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idusuarios: id }),
    });
    if (res.status === 401) {
      throw "Not authorized";
    } else if (res.status === 200) {
      alert(`user with id: ${id} saved successfully`);
      setUserDate();
    }
  }

  return (
    <>
      <h1>Esto es Shift</h1>

      {userDate?.map((user) => (
        <div key={user.id}>
          <li>
            {user.nombre} {user.apellidos} {user.fAsist.split("T")[0]}
          </li>
          {user.fAsist === null ||
          fechaEnFormatoYYYYMMDD != user.fAsist.split("T")[0] ? (
            <button
              name="idusuarios"
              onClick={(e) => saveAssistance(e, user.id)}
            >
              V
            </button>
          ) : (
            <p>Validado</p>
          )}
        </div>
      ))}
    </>
  );
}
