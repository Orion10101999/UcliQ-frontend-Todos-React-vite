import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const TodoCreate = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);
    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.user);
    const user = currentUser?._id 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const res = await fetch('/api/todo/create', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  title,description,completed,user
                }),
              });
              const data = await res.json();
             console.log(data);
              navigate(`/`);
            } catch (error) {
              console.log(error);
            }
            setTitle("")
            setDescription("")
            setCompleted(false)
     
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-4">Create Todo</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border rounded-md" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea 
              className="w-full px-3 py-2 border rounded-md" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
            />
          </div>
          <div className="mb-4">
                    <label className="block text-gray-700">Completed</label>
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={(e) => setCompleted(e.target.checked)}
                        className="mr-2 leading-tight"
                    />
                </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Create
          </button>
        </form>
      </div>
      <div className='flex gap-2 mt-5'>
        <p>Show All Todos Items : </p>
        <Link to={'/showtodos'}>
          <span className='text-blue-700'>Click Here</span>
        </Link>
      </div>


    </div>
  );
};

export default TodoCreate;




/*

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TodoCreate = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:3000/api/todos', 
        { title, description }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      navigate('/todos');
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-4">Create Todo</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border rounded-md" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea 
              className="w-full px-3 py-2 border rounded-md" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoCreate;


*/