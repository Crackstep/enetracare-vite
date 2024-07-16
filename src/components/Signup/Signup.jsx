import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const user = {
      email,
      password,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users/register`, user);
      console.log('Signup successful:', response.data);
      navigate('/login'); // Redirect to login page after successful signup
    } catch (err) {
      console.error('Error:', err.response.data.message);
      setError(err.response.data.message);
    }
  };

  return (
    <div className="hero bg-[#9fdbe1] text-[#0E9298] min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="input bg-white input-bordered"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="form-control mt-6">
              <button className="btn text-white bg-[#0E9298]">Sign Up</button>
            </div>
            <p className="mt-4 text-sm text-center">
              Already have an account? <Link to="/login" className="text-[#0E9298] underline">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
