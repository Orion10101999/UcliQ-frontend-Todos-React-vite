import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateTodo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);
    useEffect(() => {
        const fetchTodo = async () => {
            try {
                const response = await axios.get(`/api/todo/${id}`);
                setTitle(response.data.title);
                setDescription(response.data.description);
                setCompleted(response.data.completed);
            } catch (err) {
                console.error(err);
            }
        };

        fetchTodo();
    }, [id]);
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/todo/${id}`, { title, description, completed });
            navigate('/showtodos');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Update Todo</h1>
            <form onSubmit={handleUpdate}>
                <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md"
                    ></textarea>
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
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Update
                </button>
            </form>

            
        </div>
    )



}




export default UpdateTodo




/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateTodos = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get(`/api/todos/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setTitle(response.data.title);
        setDescription(response.data.description);
        setCompleted(response.data.completed);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTodo();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/todos/${id}`, {
        title,
        description,
        completed
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Update Todo</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          ></textarea>
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
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateTodos;

*/