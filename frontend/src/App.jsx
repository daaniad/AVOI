import {Routes, Route} from "react-router-dom"
import Layout from "./components/Layout/Layout"
import { ATTENDANCE, EVENTS, HOME, ID, LOGIN, MANAGE, MANAGE_EVENTS, NOTICE, SEARCH, SHIFT, SHITF_LABEL, SIGNIN } from "./const/homeMenu/homeMenu"
import Attendance from "./views/Attendance"
import EventId from "./views/EventID"
import Events from "./views/Events"
import Home from "./views/Home/Home"
import Login from "./views/Login"
import ManageUsers from "./views/Manage/ManageUsers"
import ManageEvents from "./views/ManageEvents"
import Notice from "./views/Notice"
import Search from "./views/Search"
import Shift from "./views/Shift"
import SignIn from "./views/SignIn"



function App() {
  return (
    
    <Routes>
      <Route path={HOME} element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path={SIGNIN} element={<SignIn/>}/>
      <Route path={LOGIN} element={<Login/>}/>
      <Route path={NOTICE} element={<Notice/>}/>
      <Route path={SHIFT} element={<Shift/>}/>
      <Route path={ATTENDANCE} element={<Attendance/>}/>
      <Route path={EVENTS} element={<Events/>}/>
      <Route path={EVENTS}>
          <Route index element={<Events />} />
          <Route path={":id"} element={<EventId />} />
        </Route>
      <Route path={SEARCH} element={<Search/>}/>
      <Route path={MANAGE} element={<ManageUsers/>}/>
      <Route path={MANAGE_EVENTS} element={<ManageEvents/>}/>
      </Route>
    </Routes>
    
  )
}

export default App
