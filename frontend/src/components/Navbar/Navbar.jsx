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
import { useCheckLoginContext } from "../../contexts/AuthContext/loginContext";
import { Link } from "react-router-dom";
export default function Navbar() {
  const { logout, authorization } = useCheckLoginContext();
  console.log(authorization.id);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <li className="btn btn-light btn-lg p-2">
            <Link
              className="text-dark navbar-brand text-decoration-none"
              to={HOME}
            >
              <span>{HOME_LABEL}</span>
            </Link>
          </li>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="btn-light btn-lg p-2 nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={`notice/${authorization.id}`}
                >
                  {NOTICE_LABEL}
                </Link>
              </li>
              <li className="btn-light btn-lg p-2 nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={SIGNIN}
                >
                  {SIGIN_LABEL}
                </Link>
              </li>
              <li className="btn-light btn-lg p-2 nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={EVENTS}
                >
                  {EVENTS_LABEL}
                </Link>
              </li>
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
                  <li>
                    <Link className="dropdown-item" to={SEARCH}>
                      {SEARCH_LABEL}
                    </Link>
                  </li>
                  {authorization.email && (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`shift/${authorization.id}`}
                      >
                        {SHITF_LABEL}
                      </Link>
                    </li>
                  )}

                  <li>
                    <Link className="dropdown-item" to={MANAGE}>
                      {MANAGE_LABEL}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={MANAGE_EVENTS}>
                      {MANAGE_EVENTS_LABEL}
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
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
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
