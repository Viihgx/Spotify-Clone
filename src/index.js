import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Faq from "./routes/Faq";
import App from './App';
import ErrorPage from './routes/ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>
//   },
//   {
//     path: "faq",
//     element: <Faq/>
//   }
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
    ]
  },
  {
    path: "faq",
    element: <Faq/>
  } 
])

ReactDOM.createRoot(document.getElementById("root")).render (
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,

);


