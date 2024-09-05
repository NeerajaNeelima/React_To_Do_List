import React,{useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import TodoApp from './components/TodoApp';
import Navbar from './components/Navbar';
import Login from './components/Login';
import './index.css'


const App = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  console.log("Login details",isAuthenticated)

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#242424' : 'white';
  }, [isDarkMode]);

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
       {isAuthenticated ? 
       <>
        <Navbar 
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
        />
        <TodoApp isDarkMode={isDarkMode} />
       </> : <Login/>} 

      
      
    </div>
  );
};

export default App;

