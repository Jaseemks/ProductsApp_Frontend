import {
  Navigate,
    createBrowserRouter,
  } from "react-router-dom";
  import Login from './pages/Login';
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import useAuthStore from './store/authstore';
  

const PrivateRoute = ({ children }) => {
  const {isAuth}=useAuthStore();
  return isAuth ? children : <Navigate to="/login" />;
};

// export const PrivateRoute = ({ children}) => {
//   const isAuthenticated = isAuth;
//   if (isAuthenticated ) {
//     return children
//   }
    
//   return <Navigate to="/" />
// }


const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute><HomePage/></PrivateRoute>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/product-list",
      element: <PrivateRoute><HomePage/></PrivateRoute>,
    },
    {
      path: "/add",
      element: <PrivateRoute><FormPage/></PrivateRoute>,
    },
    {
      path: "/edit/:id",
      element: <PrivateRoute><FormPage/></PrivateRoute>,
    },
    {
      path:'*',
      element: <div>404 not found</div>
    }
  ]);

  export default router; 