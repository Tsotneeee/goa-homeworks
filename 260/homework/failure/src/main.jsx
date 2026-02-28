import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import SignUp from './components/signUp.jsx'
import LogIn from './components/login.jsx'
import Main from './components/Main.jsx'

const router = createBrowserRouter([
  {path: '/' , element: <App />},
  {path: '/signup' , element: <SignUp />},
  {path: '/login' , element: <LogIn />},
  {path: '/Main' , element: <Main />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)