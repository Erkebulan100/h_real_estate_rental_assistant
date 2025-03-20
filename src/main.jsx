// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Import Amplify
import { Amplify } from 'aws-amplify';

// Configure Amplify with v6 format
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_3JimsuPZj',
      userPoolClientId: '4be2e9cbdh6s8vppq24fot2tgk',
      identityPoolId: 'us-east-1:0d633198-81bc-427b-9a22-4c7c3a804d49',
      region: 'us-east-1'
    }
  },
  API: {
    GraphQL: {
      endpoint: 'https://c4d5ta2ydzhkjkp5nnd6juukbe.appsync-api.us-east-1.amazonaws.com/graphql',
      region: 'us-east-1',
      defaultAuthMode: 'userPool'
    }
  },
  Storage: {
    S3: {
      bucket: 'amplify-d3j4yz1p4d4qul-ma-realestaterentalassistan-sdtzzmqmv9ip',
      region: 'us-east-1'
    }
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);