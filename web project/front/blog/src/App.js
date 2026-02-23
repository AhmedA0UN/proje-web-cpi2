
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Login from "./composants/login"
import Register from "./composants/register"

const routes = createBrowserRouter([
  {path: "/login", element: <Login/>},
  {path: "/register", element:<Register/>} 
])

function App (){
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
    )
}

export default App
