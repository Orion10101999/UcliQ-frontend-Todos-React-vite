import React, { createContext, useState } from 'react';
import { fetchTodos as fetchTodosAPI } from '../services/api';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const data = await fetchTodosAPI();
    setTodos(data);
  };

  return (
    <TodoContext.Provider value={{ todos, fetchTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
