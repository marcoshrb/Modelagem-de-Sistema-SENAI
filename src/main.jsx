import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './Pages/Login/LoginPage.jsx';
import CadastroPage from './Pages/Cadastro/CadastroPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  },
  {
    path: "/cadastro",
    element: <CadastroPage/>,
  },
  {
    path: "/app",
    element: <App/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
