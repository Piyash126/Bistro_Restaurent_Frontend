import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Menu from "../pages/menu/menu/Menu";
import Order from "../pages/order/order/Order";
import Login from "../pages/login/Login";
import SignUp from '../pages/signup/SignUp';
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../pages/shared/secret/Secret";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/dashboard/cart/Cart";
import Allusers from "../pages/dashboard/allusers/Allusers";
import AddItems from "../pages/dashboard/additems/AddItems";
import AdminRoute from "../hooks/AdminRoute";
import ManageItems from "../pages/dashboard/managaItems/ManageItems";
import UpdateItem from "../pages/dashboard/updatedItem/UpdateItem";
import Payment from "../pages/dashboard/payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/order/:category',
        element: <Order></Order>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/secret',
        element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
      }
    ]
  },

  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      //normal routes.
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path:'payment',
        element:<Payment></Payment>
      },
      //admin routes
      {
        path: 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: 'users',
        element: <AdminRoute><Allusers></Allusers></AdminRoute>
      }
    ]
  },

]);
