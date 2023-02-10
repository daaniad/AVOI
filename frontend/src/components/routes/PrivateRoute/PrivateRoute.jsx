import { Outlet, Navigate, useLocation } from "react-router-dom";
import { LOGIN } from "../../../const/homeMenu/homeMenu"
import { useCheckLoginContext } from "../../../contexts/AuthContext/logInContext";
export default function PrivateRoute({allowedRoles}) {
  const { authorization } = useCheckLoginContext();
  const location = useLocation();
  console.log(authorization, "desde private route");

  return allowedRoles?.includes(authorization.role) ? (
    <Outlet/>
  ) : authorization?.email ? (
    <Navigate to="/unauthorized" state={{from: location}} replace />
  ) : (
    <Navigate to={LOGIN} state={{from: location}} replace />
  );
  
  // if (!authorization.email) {
  //   return <Navigate to={LOGIN} />;
  // }
  // return (
  //   <div>
  //     <Outlet />
  //   </div>
  // );
}
