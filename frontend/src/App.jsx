import { useEffect, useState } from 'react';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom'
import Society from './pages/Society';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Routes>
      <Route path='/' element={<Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}/>
      <Route path='/society' element={<Society isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}/>
      </Routes>
      

    </>
  );
}

export default App;
