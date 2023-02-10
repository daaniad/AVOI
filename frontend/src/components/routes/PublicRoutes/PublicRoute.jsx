import { Outlet, Navigate, useLocation} from "react-router-dom";
import { HOME } from "../../../const/homeMenu/homeMenu";
import { useCheckLoginContext } from "../../../contexts/AuthContext/loginContext";
export default function PublicRoute() {
  const { authorization } = useCheckLoginContext();
  const location = useLocation();

  if (authorization.email) {
    return <Navigate to={HOME} state={{from: location}} replace />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}
