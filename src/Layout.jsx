import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useAuth } from './context/AuthProvider';
import Cookies from 'js-cookie';

function Layout() {
  const {setRefreshToken} = useAuth();
  
  useEffect(()=>{
    const refToken = Cookies.get('refreshToken');
    console.log('Refresh Token:', refToken);
    setRefreshToken(refToken);
  },[]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
