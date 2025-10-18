import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/home.jsx'
import Contact from './components/contact.jsx'
import ErrorComp from './components/errorComp.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/home', element: <Home /> },
  { path: '/contact', element: <Contact /> },
  { path: '*', element: <ErrorComp /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
