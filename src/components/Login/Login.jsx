import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthProvider';
import Cookies from 'js-cookie';
import Logo from './images/navbar-logo.svg';

function Login() {
  const [passType, setPassType] = useState('password');
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setRefreshToken, setRole } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/login`, { email, password });
      const { user, accessToken, refreshToken } = response.data.data;

      document.cookie = `accessToken=${accessToken}; Secure; SameSite=None`;
      document.cookie = `refreshToken=${refreshToken}; Secure; SameSite=None`;

      console.log(user);
      const refToken = Cookies.get('refreshToken');
      setRefreshToken(refToken);
      setRole(user.role);
      navigate('/');
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError('Failed to login. Please try again.');
      }
    }
  };

  return (
    <div className='bg-[#9fdbe1] text-[#0E9298] min-h-screen flex flex-col items-center justify-center px-4'>
      <div className='flex flex-col items-center justify-center gap-6 mb-8'>
        <img src={Logo} alt="Logo" className='w-40 md:w-60 drop-shadow-lg' />
        <h1 className="text-4xl md:text-5xl font-bold text-center">Login to eNetraCare</h1>
      </div>
      <div className="w-full max-w-md">
        <div className="card bg-white bg-opacity-25 shadow-2xl rounded-lg p-6">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#017f84] font-semibold text-lg">Email:</span>
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="input bg-white bg-opacity-35 shadow-md text-[#017f84] outline-none border-none rounded-lg focus:shadow-lg placeholder:text-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#017f84] text-lg font-semibold">Password:</span>
              </label>
              <div className='relative'>
                <input
                  type={passType}
                  placeholder="Enter password"
                  className="input bg-white bg-opacity-35 shadow-md text-[#017f84] outline-none border-none rounded-lg focus:shadow-lg placeholder:text-gray-500 w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  className='absolute right-2 top-1/2 transform -translate-y-1/2 text-xl'
                  type='button'
                  onClick={() => {
                    setIsPassVisible(!isPassVisible);
                    setPassType(isPassVisible ? 'password' : 'text');
                  }}
                >
                  {isPassVisible ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
                </button>
              </div>
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button className="btn text-white bg-[#0E9298] border-none rounded-lg shadow-md hover:bg-[#017f84] w-full py-2">Login</button>
            <p className="mt-4 text-sm text-center">
              <Link to="/change-password" className="text-[#0E9298] underline">Change password</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
