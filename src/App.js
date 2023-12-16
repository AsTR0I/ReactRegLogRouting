import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

// импорт стилей
import './App.css';

import Home from './components/Home/Home';
import Login from './components/LogReg/Login';
import Reg from './components/LogReg/Reg';

const App = () => {
  return (
    <div className="App">
      <main>
      <div className='wrapper'>
      <BrowserRouter>
        <header>
        <h1>logo</h1>
        <Link to="/">Home</Link>
          <nav>
            <ul>
              <li><Link to="/Login">Login</Link></li>
              <li><Link to="/Reg">Registration</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Reg" element={<Reg />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
      </div>
      </main>
    </div>
  );
}

export default App;
