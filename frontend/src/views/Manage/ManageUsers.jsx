import ManageUsersView from "./ManageUsersView";
import useFetch from "../../hooks/useFetch/useFetch";

export default function ManageUsers() {
    
  const { response, error } = useFetch("http://localhost:3000/user/manage");
    return (
        <ManageUsersView response={response}/>
    )
}