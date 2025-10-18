import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router'
import App from './App.jsx'
import Main from './components/Main.jsx'
import SignUp from './components/signUp.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/components/Main.jsx',
    element: <Main />,
  },
  {
    path: '/components/signUp.jsx',
    element: <SignUp />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
