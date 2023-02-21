import useFetch from "../../hooks/useFetch/useFetch";
import { useCheckLoginContext } from "../../contexts/AuthContext/loginContext";
import { useEffect, useState } from "react";
export default function ShiftView() {
  const [idUser, setIdUser] = useState(null);
  const [userDate, setUserDate] = useState(null);
  const { authorization } = useCheckLoginContext();
  const { response, error } = useFetch(
    `http://localhost:3000/user/shift/${authorization.id}`
  );

  let currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  const day = ("0" + currentDate.getDate()).slice(-2);
  const fechaEnFormatoYYYYMMDD = `${year}-${month}-${day}`;
  console.log(fechaEnFormatoYYYYMMDD);

  useEffect(//convertir en onclick
    function () {
      async function saveAssistance(id) {
        const res = await fetch(`http://localhost:3000/user/assistance`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ idusuarios: id }),
        });
        if (res.status === 401) {
          throw "Not authorized";
        } else if (res.status === 200) {
          alert(`user with id: ${id} saved successfully`);
        }
      }
      saveAssistance(idUser);
    },
    [idUser]
  );
  useEffect(function () {
    async function fetchDate(id) {
      await fetch(`http://localhost:3000/user/date/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idusuarios: id }),
      });
    }
    fetchDate;
  });
  return (
    <>
      <h1>Esto es Shift</h1>

      {response?.map((user) => (
        <div key={user.id}>
          <li>
            {user.nombre} {user.apellidos}
          </li>
          <button name="idusuarios" onClick={() => setIdUser(user.id)}>
            V
          </button>
        </div>
      ))}
    </>
  );
}
