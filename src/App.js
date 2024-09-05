import React from 'react';
import { useSelector } from 'react-redux';
import TodoApp from './components/TodoApp';
import Login from './components/Login';
import './index.css'


const App = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  console.log("Login details",isAuthenticated)

  return (
    <div className='overflow-y-auto hide-scrollbar'>
      {/* {isAuthenticated ? <TodoApp/> : <Login/>} */}
      <TodoApp/>
    </div>
    
  );
};

export default App;
