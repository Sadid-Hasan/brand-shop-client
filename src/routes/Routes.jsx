import { createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import Mycart from "../pages/Mycart";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Cars from "../pages/Cars";

const router = createBrowserRouter([
  {
    path : "/",
    element:<Root></Root>,
    children:[
  {
    path: "/",
    element: <Home></Home> ,
  },
  {
    path: "/add-product",
    element: <AddProduct></AddProduct>,
  },
  {
    path: "/my-cart",
    element: <Mycart></Mycart>,
    loader:()=>fetch('http://localhost:5000/car')
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element:<Signup></Signup>
  },
  {
    path:"/cars",
    element:<Cars></Cars>
  }
]
  }
]);

export default router;
