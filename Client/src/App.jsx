import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductList } from './features/ProductList/ProductList'
import { Navbar } from './features/Navbar/Navbar'
import { Home } from './features/pages/Home'
import { LoginPage } from './features/pages/LoginPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import {  SingUp } from './features/auth/SingUp'
import { Login } from './features/auth/Login'
import { RegisterPage } from './features/pages/RegisterPage'
import { Cart } from './features/Cart/Cart'
import { CartPage } from './features/pages/CartPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path:"/singup",
    element:<RegisterPage></RegisterPage>
  },
  {
    path:'/login',
    element:<LoginPage></LoginPage>
  },
  {
    path:'/cart',
    element:<CartPage></CartPage>
  }
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
 <RouterProvider router={router} />
     
    </div>
  )
}

export default App
