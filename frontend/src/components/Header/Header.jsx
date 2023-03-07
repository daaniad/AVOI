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
import { ROLES } from "../../const/homeMenu/roles";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/avoi.png";
import * as Icon from "react-bootstrap-icons";
import "./header.css";

import { useCheckLoginContext } from "../../contexts/AuthContext/loginContext";

export default function Header() {
  const { authorization, logout } = useCheckLoginContext();
  return (
    <>
      <div className="d-flex p-2 container justify-content-between">
        <div className="d-flex align-items-center">
          {authorization.email ? (
            <button
              className="btn-secondary btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#staticBackdrop"
              aria-controls="staticBackdrop"
            >
              <Icon.List className="fs-2" /> Hola,{" "}
              {authorization.nombre.replace(/^\w/, (c) => c.toUpperCase())}
            </button>
          ) : (
            <button
              className="btn-secondary btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#staticBackdrop"
              aria-controls="staticBackdrop"
            >
              <Icon.List className="fs-2" /> Menú
            </button>
          )}
        </div>
        <div
          className="offcanvas canvas offcanvas-start"
          data-bs-backdrop="static"
          tabIndex="-1"
          id="staticBackdrop"
          aria-labelledby="staticBackdropLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="staticBackdropLabel">
              Menú
            </h5>
            <div className="text-center">
              <button
                type="button"
                className="btn-secondary btn rounded border-secondary"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <span className="text-white hover-li-secondary">Cerrar</span>
              </button>
            </div>
          </div>
          <div className="offcanvas-body text-center">
            {authorization.email ? (
              <div className="">
                <button
                  className="btn btn-success hover-li-secondary"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <ul className="navbar-nav">
                  <li className="unstyled btn btn-success hover-li mt-4">
                    <Link className="nav-link" to={LOGIN}>
                      <span className="hover-li">Login</span>
                    </Link>
                  </li>
                  <li className="btn btn-secondary hover-li mt-4">
                    <Link className="nav-link" to={SIGNIN}>
                      <span className="hover-li-secondary">{SIGIN_LABEL}</span>
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
              {authorization.email && (
                <li className="btn-light btn-lg mt-4 nav-item">
                  <Link
                    className="nav-link hover-li-secondary"
                    to={`notice/${authorization.id}`}
                  >
                    <span className="hover-li-secondary">{NOTICE_LABEL}</span>
                  </Link>
                </li>
              )}
              <li className="btn-light btn-lg mt-4 nav-item">
                <Link className="nav-link hover-li-secondary" to={EVENTS}>
                  <span className="hover-li-secondary">{EVENTS_LABEL}</span>
                </Link>
              </li>

              {authorization.role != [ROLES.User] && (
                <li className="btn-light btn-lg mt-4 nav-item">
                  <Link
                    className="hover-li-secondary nav-link"
                    to={`shift/${authorization.id}`}
                  >
                    <span className="hover-li-secondary">{SHITF_LABEL}</span>
                  </Link>
                </li>
              )}

              {authorization.role == [ROLES.SuperAdmin] && (
                <>
                  <li className="mt-4">
                    <Link className="nav-link hover-li-secondary" to={MANAGE}>
                      <span className="hover-li-secondary">{MANAGE_LABEL}</span>
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      className="nav-link hover-li-secondary"
                      to={MANAGE_EVENTS}
                    >
                      <span className="hover-li-secondary">
                        {MANAGE_EVENTS_LABEL}
                      </span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="d-flex mx-auto p-5">
          <Link to={HOME}>
            <img src={logo} className="img-fluid w-100" />
          </Link>
        </div>
        {authorization.email ? (
          <div className="d-flex align-items-center">
            <button
              className="btn btn-success hover-li-secondary"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="d-flex align-items-center">
            <Link className="btn btn-success" to={LOGIN}>
              <span className="hover-li">Login</span>
            </Link>
          </div>
        )}
        <div className="row">
          <div className="col-12 col-lg"></div>
        </div>
      </div>
    </>
  );
}
