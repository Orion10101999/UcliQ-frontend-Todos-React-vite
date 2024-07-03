import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const DeleteTodo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
      const deleteTodo = async () => {
        try {
          const res = await axios.delete(`/api/todo/${id}`);
          console.log(res.data.message);
          navigate('/showtodos');
        } catch (err) {
          console.error(err);
        }
      };
      deleteTodo();
    }, []);
  return (
<div className="text-center mt-10">
  <p>Deleting todo...</p>
</div>)
}

export default DeleteTodo



/*
import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteTodos = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteTodo = async () => {
      try {
        await axios.delete(`/api/todos/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        navigate('/');
      } catch (err) {
        console.error(err);
      }
    };

    deleteTodo();
  }, [id, navigate]);

  return (
  );
};

export default DeleteTodos;



*/