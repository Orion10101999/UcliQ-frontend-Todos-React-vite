import React from 'react';
import TodoList from '../components/TodoList';

import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <div>
        <Header/>
        <TodoList />
      </div>
      
    </>
  );
};

export default Home;
