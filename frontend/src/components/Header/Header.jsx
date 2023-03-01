import {
  ADMIN_LABEL,
  ATTENDANCE,
  ATTENDANCE_LABEL,
  EVENTS,
  EVENTS_LABEL,
  HOME,
  HOME_LABEL,
  LOGIN,
  LOGIN_LABEL,
  MANAGE,
  MANAGE_EVENTS,
  MANAGE_EVENTS_LABEL,
  MANAGE_LABEL,
  NOTICE,
  NOTICE_LABEL,
  SEARCH,
  SEARCH_LABEL,
  SHIFT,
  SHITF_LABEL,
  SIGIN_LABEL,
  SIGNIN,
} from "../../const/homeMenu/homeMenu";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/avoi.png";
import * as Icon from "react-bootstrap-icons";

import { useCheckLoginContext } from "../../contexts/AuthContext/loginContext";

export default function Header() {
  const { authorization, logout } = useCheckLoginContext();
  return (
    <>
      <div className="d-flex p-2 container justify-content-between">
        <div className="d-flex align-items-center">
          <Link className="nav-link btn-hover p-2" to={HOME}>
            AVOI
          </Link>
        </div>
        <div className="d-flex mx-auto justify-content-center align-items-center p-5">
          <img src={logo} className="img-fluid w-100" />
        </div>

        <div className="d-flex align-items-center">
          {authorization.email ? (
            <button
              className="btn-success btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <Icon.PersonCircle className="fs-2" /> {authorization.nombre}
            </button>
          ) : (
            <button
              className="btn-success btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <Icon.PersonCircle className="fs-2" /> Cuenta
            </button>
          )}
        </div>
        <div className="row">
          <div className="col-12"></div>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasRightLabel">
                Perfil
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body text-center">
              {authorization.email ? (
                <div>
                  <button className="" onClick={logout}>
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <ul className="navbar-nav unstyled">
                    <li className="unstyled">
                      <Link className="nav-link p-2" to={LOGIN}>
                        Login
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link className="nav-link" to={SIGNIN}>
                        {SIGIN_LABEL}
                      </Link>
                    </li>
                  </ul>
                </>
              )}
              <ul className="navbar-nav unstyled">
                <li className="btn-light btn-lg">
                  <Link className="nav-link active" to={HOME}>
                    <span>{HOME_LABEL}</span>
                  </Link>
                </li>
                <li className="btn-light btn-lg  nav-item">
                  <Link
                    className="nav-link active"
                    to={`notice/${authorization.id}`}
                  >
                    {NOTICE_LABEL}
                  </Link>
                </li>
                <li className="btn-light btn-lg  nav-item">
                  <Link className="nav-link active" to={EVENTS}>
                    {EVENTS_LABEL}
                  </Link>
                </li>

                {authorization.email && (
                  <li>
                    <Link className="" to={`shift/${authorization.id}`}>
                      {SHITF_LABEL}
                    </Link>
                  </li>
                )}

                <li className="">
                  <Link
                    className="text-decoration-none text-success"
                    to={MANAGE}
                  >
                    {MANAGE_LABEL}
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to={MANAGE_EVENTS}>
                    {MANAGE_EVENTS_LABEL}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
