import useFetch from "../../hooks/useFetch/useFetch";
import { useCheckLoginContext } from "../../contexts/AuthContext/loginContext";
export default function NoticeView() {
  const { authorization } = useCheckLoginContext();
  const { response, error } = useFetch(
    `http://localhost:3000/user/admin/${authorization.id}`
  );
  return (
    <>
      <h1>Esto es Notice</h1>
      {response?.map((user) => (
        <div className="d-flex" key={user.id}>
          <li className="p-2">{user.nombre} {user.apellidos}</li>
          <button className="rounded">Send Notice</button>
        </div>
      ))}
    </>
  );
}
