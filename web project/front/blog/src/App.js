import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Login from "./composants/login"
import Register from "./composants/register"
import Navbar from "./composants/navbar"

const routes = createBrowserRouter([
  {path: "/login", element: <Login/>},
  {path: "/register", element: <Register/>},
  {path: "/navbar", element: <Navbar/> }
])

function App (){
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
    )
}

export default App
