import React from 'react'
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
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyContextComponent>
      <FirebaseComponent>
        <RouterProvider router={router} />
      </FirebaseComponent>
    </MyContextComponent>
  </React.StrictMode>,
)
