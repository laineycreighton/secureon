//----- IMPORTS -----//
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages
import Prompts from './pages/Prompts.jsx';
import Password from './pages/Password.jsx';

//----- EXPORTS -----//
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Prompts />,
      },
      {
        path: "/password",
        element: <Password />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);