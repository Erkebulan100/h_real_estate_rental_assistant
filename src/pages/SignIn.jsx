// src/pages/SignIn.jsx
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function SignIn() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
          <h1>Welcome {user?.username}</h1>
          <button onClick={signOut} style={{ marginTop: '1rem' }}>Sign Out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default SignIn;
