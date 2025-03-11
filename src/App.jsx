import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FindPropertyForRent from './pages/FindPropertyForRent';
import FindAppropriateTenant from './pages/FindAppropriateTenant';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/find-property" element={<FindPropertyForRent />} />
        <Route path="/find-tenant" element={<FindAppropriateTenant />} />
      </Routes>
    </Router>
  );
}

export default App;
