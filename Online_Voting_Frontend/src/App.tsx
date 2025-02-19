import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import AuthLayout from './components/Auth/AuthLayout.jsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthLayout />} />
      </Routes>
    </Router>
  );
};

export default App;
