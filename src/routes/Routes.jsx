import { createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import Mycart from "../pages/Mycart";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Cars from "../pages/Cars";
import PrivateRoute from "./PrivateRoute";

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
    element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
  },
  {
    path: "/my-cart",
    element: <PrivateRoute><Mycart></Mycart></PrivateRoute>,
    loader:()=>fetch('https://brand-shop-server-xmehh5xyk-sadid-hasans-projects.vercel.app/car')
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
  },
  
]
  }
]);

export default router;
