import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthProvider';
import Cookies from 'js-cookie';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {setRefreshToken} = useAuth();

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
    <div className="hero bg-[#9fdbe1] text-[#0E9298] min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6 w-[30%] mx-auto">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="input bg-white input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="input bg-white input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="form-control mt-6">
              <button className="btn text-white bg-[#0E9298]">Login</button>
            </div>
            <p className="mt-4 text-sm text-center">
              Don't have an account? <Link to="/signup" className="text-[#0E9298] underline">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
