import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add your login logic here, like calling an API endpoint
  
    axios.post('/api/auth/login', formData)
    .then((response) => {
      const token = response.data.token; // assuming the token is in the response data
      localStorage.setItem('token', token);

      console.log(response.data);
      console.log(token);
        // Handle success response
      })
      .catch((error) => {
        console.error(error);
        // Handle error response
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Login
          </button>
        </form>
      </div>

      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to={'/signup'}>
          <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
      <div className='flex gap-2 mt-5'>
        <p>Go to Home Page : </p>
        <Link to={'/'}>
          <span className='text-blue-700'>Home</span>
        </Link>
      </div>

    </div>
  );
};

export default Login;



/*
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData);
  // You can add your login logic here, like calling an API endpoint

  axios.post('/api/auth/login', formData)
   .then((response) => {
      console.log(response);
      // Set token to localStorage
      const token = response.data.token; // assuming the token is in the response data
      const cookieToken = response.headers['set-cookie']; // assuming the token is set as a cookie
      localStorage.setItem('token', token);
      // You can also set the cookie token if you want
      // localStorage.setItem('cookieToken', cookieToken);

      // Handle success response
    })
   .catch((error) => {
      console.error(error);
      // Handle error response
    });
};

*/