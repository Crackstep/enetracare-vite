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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='services' element={<Services />} />
      <Route path='patient-resources/tips' element={<Tips />} ></Route>
      <Route path='patient-resources/news' element={<News />} ></Route>
      <Route path='patient-resources/disorder' element={<Disorder />} ></Route>

      <Route path='testimonials' element={<Testimonials />} />
      <Route path='contact-us' element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
