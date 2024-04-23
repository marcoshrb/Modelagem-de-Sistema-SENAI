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
import GamePage from "./Pages/Game/Game"
import { NavBar } from "./components/Nav-bar/Nav-bar";

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
  {
    path: "/home",
    element: <GamePage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
