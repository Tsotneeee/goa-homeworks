import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import NotFoundPage from './components/notFoundPage.jsx'

const router = createBrowserRouter([
  {path:'/', Component: App},
  {path:'*', Component: NotFoundPage}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)