import ManageUsersView from "./ManageUsersView";
import { useState, useEffect } from "react";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(function () {
    async function fetchUsers() {
      const response = await fetch(`http://localhost:3000/user/manage`);
      const userList = await response.json();
      setUsers(userList);
    }
    fetchUsers();
  }, []);

  async function fetchData(e,idusuario,idturno) {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:3000/user/validate/${idusuario}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idturno }),
      }
    );
    const newUserList = await response.json();
    setUsers(newUserList);
  }

  return <ManageUsersView response={users} onSubmit={fetchData} />;
}
