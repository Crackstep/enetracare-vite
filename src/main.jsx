import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/AboutUs/About.jsx'
import Services from './components/Services/Services.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Contact from './components/Contact/ContactUs.jsx'
import Tips from './components/Tips/Tips.jsx'
import News from './components/News/News.jsx'
import Disorder from './components/Disorder/Disorder.jsx'
import Signup from './components/Signup/Signup.jsx'
import Login from './components/Login/Login.jsx'
import { AuthProvider } from './context/AuthProvider.jsx'
import SetNewPassword from './components/SetPassword/SetNewPassword.jsx'
import Gallery from './components/Gallery/Gallery.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='services' element={<Services />} />
      <Route path='patient-resources/tips' element={<Tips />} ></Route>
      <Route path='patient-resources/news' element={<News />} ></Route>
      <Route path='patient-resources/disorder' element={<Disorder />} ></Route>
      <Route path='change-password' element={<SetNewPassword />} ></Route>

      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='testimonials' element={<Testimonials />} />
      <Route path='contact-us' element={<Contact />} />
      <Route path='gallery' element={<Gallery />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
