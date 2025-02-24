import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import AuthLayout from './components/Auth/AuthLayout.jsx';
import './index.css'; 
import HomePage from './components/Layout/HomePage.js';
import ProfileLayout from './components/Profile/ProfileDialog.js';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthLayout />} />
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/profile' element={<ProfileLayout/>}/>
      </Routes>
    </Router>
  );
};

export default App;
