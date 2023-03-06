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
import "./header.css"

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
        <div className="d-flex mx-auto p-5">
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
              <Icon.PersonCircle className="fs-2" /> {authorization.nombre.replace(/^\w/, (c) => c.toUpperCase())}
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
          <div className="col-12 col-lg"></div>

          <div
            className="offcanvas canvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasRightLabel">
                Navegación
              </h5>
              <div className="text-center">

              <button
                type="button"
                className="bg-success btn btn-hover rounded border-success"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ><span className="text-white ">Cerrar</span></button>
              </div>
            </div>
            <div className="offcanvas-body text-center">
              {authorization.email ? (
                <div className="">
                  <button className="btn btn-warning" onClick={logout}>
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <ul className="navbar-nav">
                    <li className="unstyled btn btn-primary hover-li mt-4">
                      <Link className="nav-link" to={LOGIN}>
                        Login
                      </Link>
                    </li>
                    <li className="btn btn-warning hover-li mt-4">
                      <Link className="nav-link" to={SIGNIN}>
                        {SIGIN_LABEL}
                      </Link>
                    </li>
                  </ul>
                </>
              )}
              <ul className="navbar-nav ">
                <li className="btn-light btn-lg mt-4">
                  <Link className="nav-link hover-li-secondary " to={HOME}>
                    <span className="hover-li-secondary">{HOME_LABEL}</span>
                  </Link>
                </li>
                {authorization.email &&
                <li className="btn-light btn-lg mt-4 nav-item">
                  <Link
                    className="nav-link hover-li-secondary"
                    to={`notice/${authorization.id}`}
                  >
                    {NOTICE_LABEL}
                  </Link>
                </li>
                 }
                <li className="btn-light btn-lg mt-4 nav-item">
                  <Link className="nav-link hover-li-secondary" to={EVENTS}>
                    {EVENTS_LABEL}
                  </Link>
                </li>

                {authorization.role && (
                  <li className="btn-light btn-lg mt-4 nav-item">
                    <Link className="hover-li-secondary nav-link" to={`shift/${authorization.id}`}>
                      {SHITF_LABEL}
                    </Link>
                  </li>
                )}

                <li className="mt-4 btn-hover">
                  <Link
                    className="nav-link hover-li-secondary"
                    to={MANAGE}
                  >
                    {MANAGE_LABEL}
                  </Link>
                </li>
                <li className="mt-4">
                  <Link className="nav-link hover-li-secondary" to={MANAGE_EVENTS}>
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
