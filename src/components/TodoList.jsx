import React from 'react'

const TodoList = () => {
  return (
    <div>TodoList</div>
  )
}

export default TodoList

/*
import React, { useContext, useEffect } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
  const { todos, fetchTodos } = useContext(TodoContext);

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="p-4">
      {todos.map(todo => (
        <div key={todo._id} className="border p-2 mb-2">
          <h2 className="text-lg">{todo.title}</h2>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
*/