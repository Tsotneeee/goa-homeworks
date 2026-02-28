import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import SignUp from './components/signUp';
import LogIn from './components/logIn';
import Cart from './components/cart';
import ProfileCard from './components/profileCard.jsx'
import AboutUs from './components/aboutUs.jsx'
import ContactUs from './components/contactUs.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/signup', element: <SignUp />},
  {path: '/login', element: <LogIn />},
  {path: '/cart', element: <Cart />},
  {path: '/profile', element: <ProfileCard name="John Doe" email="john.doe@example.com" />},
  {path: '/about-us', element: <AboutUs />},
  {path: '/contact-us', element: <ContactUs />},
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)