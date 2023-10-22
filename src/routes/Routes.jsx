import { createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

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
    element: <MyCart></MyCart>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element:<Signup></Signup>
  }
]
  }
]);

export default router;
