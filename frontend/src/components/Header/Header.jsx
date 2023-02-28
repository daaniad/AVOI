import {
  HOME,
  HOME_LABEL,
  LOGIN,
  LOGIN_LABEL,
  SIGNIN,
  SIGIN_LABEL,
  ADMIN_LABEL,
  SEARCH,
} from "../../const/homeMenu/homeMenu";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/avoi.png";

import { useCheckLoginContext } from "../../contexts/AuthContext/loginContext";

export default function Header() {
  const { authorization, logout } = useCheckLoginContext();
  return (
    <>
      <div className="d-flex justify-content-evenly">
        <img src={logo} className="justify-content-center"  />
    <ul className="unstyled">

      <li className="btn-light btn-lg list-unstyled p-2 nav-item dropdown">
        <span
          className="nav-link active"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {ADMIN_LABEL}
        </span>
        <ul className="dropdown-menu">
          {authorization.email ? (
            <button className="dropdown-item" onClick={logout}>
              Logout
            </button>
          ) : (
            <Link className="dropdown-item" to={LOGIN}>
              Login
            </Link>
          )}
        </ul>
      </li>
    </ul>
      </div>
    </>
  );
}
