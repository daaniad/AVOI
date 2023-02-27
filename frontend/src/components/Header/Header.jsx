import {
  HOME,
  HOME_LABEL,
  LOGIN,
  LOGIN_LABEL,
  SIGNIN,
  SIGIN_LABEL,
  ADMIN_LABEL,
  SEARCH
} from "../../const/homeMenu/homeMenu";
import {Link} from "react-router-dom"

import {useCheckLoginContext} from "../../contexts/AuthContext/loginContext"

export default function Header() {
  const {authorization, logout} = useCheckLoginContext();
  return (
    <>
      <h1>Header</h1>
      <li className="btn-light btn-lg p-2 nav-item dropdown">
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
    </>
  );
}
