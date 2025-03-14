import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FindPropertyForRent from './pages/FindPropertyForRent';
import FindAppropriateTenant from './pages/FindAppropriateTenant';
import PropertyDetails from './pages/PropertyDetails'; // placeholder
import TenantDetails from './pages/TenantDetails';     // placeholder
import SignIn from './pages/SignIn';   
import LandlordDashboard from './pages/LandlordDashboard';
import TenantDashboard from './pages/TenantDashboard';                  // placeholder

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
        {/* New dashboard routes */}
        <Route path="/landlord-dashboard" element={<LandlordDashboard />} />
        <Route path="/tenant-dashboard" element={<TenantDashboard />} />

        {/* If user navigates to an unknown route, redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
