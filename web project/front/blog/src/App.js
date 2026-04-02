import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Login from "./composants/login"
import Register from "./composants/register"
import Navbar from "./composants/navbar"
import Content from "./composants/content"

const routes = createBrowserRouter([
  {path: "/login", element: <Login/>},
  {path: "/register", element: <Register/>},
  {path: "/navbar", element: <Navbar/> },
  {path: "/content", element: <Content/>}
])

function App (){
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
    )
}

export default App
