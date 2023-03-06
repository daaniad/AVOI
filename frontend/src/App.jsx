import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import {
  ATTENDANCE,
  EVENTS,
  HOME,
  ID,
  LOGIN,
  MANAGE,
  MANAGE_EVENTS,
  NOTICE,
  SEARCH,
  SHIFT,
  SHITF_LABEL,
  SIGNIN,
} from "./const/homeMenu/homeMenu";
import Attendance from "./views/Attendance";
import EventId from "./views/EventID";
import Events from "./views/Events";
import Home from "./views/Home/Home";
import Login from "./views/Login";
import ManageUsers from "./views/Manage/ManageUsers";
import ManageEvents from "./views/ManageEvents";
import Notice from "./views/Notice";
import Search from "./views/Search";
import Shift from "./views/Shift";
import SignIn from "./views/SignIn";
import PublicRoute from "./components/routes/PublicRoutes/PublicRoute";
import PrivateRoute from "./components/routes/PrivateRoute/PrivateRoute";
import {ROLES} from "./const/homeMenu/roles"
import Unauthorized from "./views/Unauthorized/Unauthorized"

function App() {
  return (
    <Routes>
      <Route path={HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        {/* Public Routes */}
        <Route element={<PublicRoute />}>
          <Route path={LOGIN} element={<Login />} />
        <Route path={SIGNIN} element={<SignIn />} />
        </Route>

        {/* Private Routes */}
        <Route element={<PrivateRoute allowedRoles={ROLES.allUsers}/>}>
          <Route path={NOTICE} element={<Notice />} />
        </Route>
        <Route path={EVENTS}>
          <Route index element={<Events />} />
          <Route path={":id"} element={<EventId />} />
        </Route>
        <Route path={SEARCH} element={<Search />} />
        <Route element={<PrivateRoute allowedRoles={[ROLES.SuperAdmin, ROLES.Admin]}/>
        }
        >
        <Route path={SHIFT} element={<Shift />} />
        

        </Route>
        <Route element={<PrivateRoute allowedRoles={[ROLES.SuperAdmin]}/>
        }
        >
        <Route path={MANAGE} element={<ManageUsers />} />
        <Route path={MANAGE_EVENTS} element={<ManageEvents />} />

        </Route>
      </Route>
    </Routes>
  );
}

export default App;
