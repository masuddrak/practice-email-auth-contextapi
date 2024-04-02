
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import MyContextComponent from './MyContextComponents/MyContextComponent';
import SignUp from './Pages/SignUp';
import FirebaseComponent from './MyContextComponents/FirebaseComponent';
import Login from './MyContextComponents/Login';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

    <MyContextComponent>
      <FirebaseComponent>
        <RouterProvider router={router} />
      </FirebaseComponent>
    </MyContextComponent>

)
