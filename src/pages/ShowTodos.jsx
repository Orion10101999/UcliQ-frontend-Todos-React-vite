import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ShowTodos = () => {
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get('/api/todo/showtodos');
                console.log(response.data);
                setTodos(response.data);
            } catch (err) {
                console.log(err);
            } 
        };
        
        fetchTodos();
    }, []);
    const handleDelete = (id) => {
      navigate(`/delete/${id}`);
    };
    
    const handleUpdate = (id) => {
      navigate(`/update/${id}`);
    };
    
    
    return (
<div className="container mx-auto p-4">
  <h1 className="text-2xl font-bold mb-4">Todo List</h1>
  <ul className="space-y-4">
    {todos.map(todo => (
      <li key={todo._id} className="bg-gray-200 shadow-md rounded-md p-4">
        <h2 className="text-xl font-semibold">{todo.title}</h2>
        <p>{todo.description}</p>
        <p>Status: {todo.completed ? 'Completed' : 'Pending'}</p>
        <div className="flex space-x-4 mt-4">
          <button
            onClick={() => handleUpdate(todo._id)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Update
          </button>
          <button
            onClick={() => handleDelete(todo._id)}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Delete
          </button>
        </div>
      </li>
    ))}
  </ul>

  <div className='flex gap-2 mt-5'>
        <p>Go to Home Page : </p>
        <Link to={'/'}>
          <span className='text-blue-700'>Click Here</span>
        </Link>
      </div>
</div>
  )
}

export default ShowTodos

/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ShowTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('/api/todo/showtodos', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}` // Assuming the token is stored in localStorage
          }
        });
        setTodos(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  const handleDelete = (id) => {
    navigate(`/delete/${id}`);
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <ul className="space-y-4">
        {todos.map(todo => (
          <li key={todo._id} className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-xl font-semibold">{todo.title}</h2>
            <p>{todo.description}</p>
            <p>Status: {todo.completed ? 'Completed' : 'Pending'}</p>
            <div className="flex space-x-4 mt-4">
              <button
                onClick={() => handleUpdate(todo._id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(todo._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowTodos;


*/


/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('/api/todo/showtodos', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}` // Assuming the token is stored in localStorage
          }
        });
        setTodos(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <ul className="space-y-4">
        {todos.map(todo => (
          <li key={todo._id} className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-xl font-semibold">{todo.title}</h2>
            <p>{todo.description}</p>
            <p>Status: {todo.completed ? 'Completed' : 'Pending'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowTodos;

*/