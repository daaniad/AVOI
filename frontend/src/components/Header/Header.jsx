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
import * as Icon from "react-bootstrap-icons";

import { useCheckLoginContext } from "../../contexts/AuthContext/loginContext";

export default function Header() {
  const { authorization, logout } = useCheckLoginContext();
  return (
    <>
      <div className="d-flex p-2 container justify-content-center">
        <div className="mx-auto ps-5">
          <img src={logo} className="mw-100 img-fluid" />
        </div>
        <div className="d-flex align-items-center">
            {authorization.email? (
              
              <button
                className="btn-success btn"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              <Icon.PersonCircle className="fs-2" /> {authorization.nombre}
              </button>
            ): (
              
              <button
                className="btn-success btn"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              <Icon.PersonCircle className="fs-2" /> Cuenta
              </button>
            )}
          <ul className="dropdown-menu">
            {authorization.email ? (
              <button className="dropdown-item" onClick={logout}>
                Logout
              </button>
            ) : (
              <>
                <Link className="dropdown-item" to={LOGIN}>
                  Login
                </Link>

                <Link className="dropdown-item" to={SIGNIN}>
                  {SIGIN_LABEL}
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
