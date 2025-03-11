import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FindPropertyForRent from './pages/FindPropertyForRent';
import FindAppropriateTenant from './pages/FindAppropriateTenant';
import PropertyDetails from './pages/PropertyDetails'; // placeholder
import TenantDetails from './pages/TenantDetails';     // placeholder
import SignIn from './pages/SignIn';                     // placeholder

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/find-property" element={<FindPropertyForRent />} />
        <Route path="/find-tenant" element={<FindAppropriateTenant />} />
        <Route path="/property-details" element={<PropertyDetails />} />
        <Route path="/tenant-details" element={<TenantDetails />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
