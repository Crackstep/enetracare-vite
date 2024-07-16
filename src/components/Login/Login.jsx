import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthProvider';
import Cookies from 'js-cookie';
import Logo from './images/navbar-logo.svg'

function Login() {
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
      setRole(user.role)
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
    <div className='bg-[#9fdbe1] text-[#0E9298] min-h-[90vh] flex flex-col items-center justify-center'>
      <h1 className="text-5xl font-bold py-2 text-center ">Login to eNetraCare</h1>
      <div className="divider divider-success px-80"></div>
      <div className='flex hero items-center justify-center gap-16'>

        <img src={Logo} alt="" className='h-60 drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)]' />
        <div className="">
          <div className="hero-content flex-col">
            <div className="text-center">
              {/* <p className="py-6 w-[30%] mx-auto">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p> */}
            </div>
            <div className="card bg-white bg-opacity-25 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#017f84] font-semibold text-lg">Email:</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="input bg-white bg-opacity-35 shadow-md text-[#017f84] outline-none border-none focus:shadow-lg placeholder:text-gray-500 focus:bg-opacity-40 input-bordered"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#017f84] text-lg font-semibold ">Password:</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="input bg-white bg-opacity-35 shadow-md text-[#017f84] outline-none border-none placeholder:text-gray-500 focus:shadow-lg focus:bg-opacity-40 input-bordered"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <div className="form-control mt-6">
                  <button className="btn text-white bg-[#0E9298] border-none outline-none shadow-xl hover:bg-white hover:text-[#017f84]">Login</button>
                </div>
                <p className="mt-4 text-sm text-center">
                  <Link to="/signup" className="text-[#0E9298] underline">Forgot password?</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
