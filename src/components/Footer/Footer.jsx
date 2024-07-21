import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthProvider';
import Cookies from 'js-cookie';

function Footer() {
  const { refreshToken, setRefreshToken, setRole } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get('accessToken');
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/logout`, { token }, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      if (response.status === 200) {
        Cookies.remove('accessToken', { secure: true, sameSite: 'None' });
        Cookies.remove('refreshToken', { secure: true, sameSite: 'None' });
        setRefreshToken('');
        setRole("user");
        navigate('/login');
      } else {
        throw new Error('Logout failed');
      }
    } catch (err) {
      console.error('Error:', err.response || err.message);
    }
  };

  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <Link to='/about' className="text-base leading-6 hover:text-white">
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/services" className="text-base leading-6 hover:text-white">
              Services
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/patient-resources/disorder" className="text-base leading-6 hover:text-white">
              Cataract
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/patient-resources/tips" className="text-base leading-6 hover:text-white">
              Tips
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/patient-resources/news" className="text-base leading-6 hover:text-white">
              News
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/testimonials" className="text-base leading-6 hover:text-white">
              Testimonials
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link to="/contact-us" className="text-base leading-6 hover:text-white">
              Contact
            </Link>
          </div>
          {!refreshToken ? (
            <div className="px-5 py-2">
              <Link to="/login" className="text-base leading-6 hover:text-white">
                Login
              </Link>
            </div>
          ) : (
            <div className="px-5 py-2">
              <Link to="#" onClick={handleLogout} className="text-base leading-6 hover:text-white">
                Logout
              </Link>
            </div>
          )}
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <Link href="#" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
            </svg>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.023 0H1.977C.885 0 0 .885 0 1.977v20.045C0 23.115.885 24 1.977 24h20.046c1.092 0 1.977-.885 1.977-1.977V1.977C24 .885 23.115 0 22.023 0zM7.042 20.583H3.653v-10.46h3.39v10.46zm-1.704-11.904c-1.084 0-1.96-.878-1.96-1.96s.876-1.96 1.96-1.96c1.083 0 1.96.877 1.96 1.96s-.877 1.96-1.96 1.96zm15.604 11.904h-3.39v-5.47c0-1.37-.028-3.143-1.92-3.143-1.924 0-2.223 1.502-2.223 3.059v5.554h-3.39v-10.46h3.239v1.43h.046c.453-.857 1.563-2.022 3.227-2.022 3.44 0 4.073 2.267 4.073 5.224v5.829z" />
            </svg>
          </Link>
        </div>
        <p className="text-center text-gray-400">
          &copy; 2024 Innovease India Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
