import React from 'react';
import TodoList from '../components/TodoList';

import Header from '../components/Header';
import TodoCreate from './TodoCreate';

const Home = () => {
  return (
    <>
      <div>
        <Header/>
        <TodoList />
        <TodoCreate/>
      </div>
      
    </>
  );
};

export default Home;
