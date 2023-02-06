import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./components/Layout/Layout"
import { HOME, LOGIN, SIGNIN } from "./const/homeMenu/homeMenu"
import Home from "./views/Home/Home"
import Login from "./views/Login"
import SignIn from "./views/SignIn"



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={HOME} element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path={SIGNIN} element={<SignIn/>}/>
      <Route path={LOGIN} element={<Login/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
