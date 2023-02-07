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
} from "../../const/homeMenu/homeMenu";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <div className="d-flex justify-content-center">
        <ul className="list-unstyled d-inline-flex bg-white rounded">
          <li className="btn btn-light btn-lg p-2">
            <Link className="text-dark text-decoration-none" to={HOME}>
              <span>{HOME_LABEL}</span>
            </Link>
          </li>

          <li className="btn btn-light btn-lg p-2">
            <Link className="text-dark text-decoration-none" to={LOGIN}>
              <span>{LOGIN_LABEL}</span>
            </Link>
          </li>

          <li className="btn btn-light btn-lg p-2">
            <Link className="text-dark text-decoration-none" to={NOTICE}>
              <span>{NOTICE_LABEL}</span>
            </Link>
          </li>

          <li className="btn btn-light btn-lg p-2">
            <Link className="text-dark text-decoration-none" to={SHIFT}>
              <span>{SHITF_LABEL}</span>
            </Link>
          </li>
          <li className="btn btn-light btn-lg p-2">
            <Link className="text-dark text-decoration-none" to={ATTENDANCE}>
              <span>{ATTENDANCE_LABEL}</span>
            </Link>
          </li>
          <li className="btn btn-light btn-lg p-2">
            <Link className="text-dark text-decoration-none" to={EVENTS}>
              <span>{EVENTS_LABEL}</span>
            </Link>
          </li>

          <button
            className="btn btn-light btn-lg p-2"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {ADMIN_LABEL}
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <Link className="text-dark text-decoration-none" to={SEARCH}>
                <span>{SEARCH_LABEL}</span>
              </Link>
            </li>
            <li className="dropdown-item">
              <Link className="text-dark text-decoration-none" to={MANAGE}>
                <span>{MANAGE_LABEL}</span>
              </Link>
            </li>

            <li className="dropdown-item">
              <Link className="text-dark text-decoration-none" to={MANAGE_EVENTS}>
                <span>{MANAGE_EVENTS_LABEL}</span>
              </Link>
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  );
}
