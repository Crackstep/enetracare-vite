import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useAuth } from './context/AuthProvider';
import Cookies from 'js-cookie';
import axios from 'axios';

function Layout() {
  const {refreshToken,setRefreshToken,role,setRole} = useAuth();
  
  useEffect(()=>{
    const refToken = Cookies.get('refreshToken');
    console.log('Refresh Token:', !refToken);
    setRefreshToken(refToken);

    if (refToken) {
      fetchRole();  
    }
  },[]);

  const fetchRole = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/current-user`, {  withCredentials: true,});
      const res = await response.data;
      setRole(res.data.role);
      }
      catch (error){
        console.log(error);
      }
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
