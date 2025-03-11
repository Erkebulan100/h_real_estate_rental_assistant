// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// 1. Import Amplify and your Amplify outputs
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';

// 2. Configure Amplify once at app startup
Amplify.configure(outputs);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
