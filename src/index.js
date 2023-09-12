import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Faq from "./routes/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
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


