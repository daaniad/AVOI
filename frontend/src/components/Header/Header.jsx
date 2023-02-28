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
import * as Icon from 'react-bootstrap-icons'

import { useCheckLoginContext } from "../../contexts/AuthContext/loginContext";

export default function Header() {
  const { authorization, logout } = useCheckLoginContext();
  return (
    <>
      <div className="d-flex p-2 container justify-content-between">
        <div className="mx-auto">
          <img src={logo} className="mw-100 img-fluid" />
        </div>
        <button
          class="btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <Icon.PersonCircle className="fs-2"/>
          <span className="">Cuenta</span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
              Offcanvas right
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="d-flex align-items-center unstyled">
          <li className="btn-light btn-lg list-unstyled nav-item dropdown">
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
        </ul>{" "}

          </div>
        </div>
      </div>
    </>
  );
}
