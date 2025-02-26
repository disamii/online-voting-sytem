import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import AuthLayout from './components/Auth/AuthLayout.jsx';
import './index.css'; 
import HomePage from './components/Layout/HomePage.js';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
const App: React.FC = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthLayout />} />
        <Route path='/home' element={<HomePage/>}/>
      </Routes>
      <ReactQueryDevtools initialIsOpen={true} />
      <ToastContainer />
    </Router>
  );
};

export default App;
