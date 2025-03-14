// src/pages/TenantDashboard.jsx
import React from 'react';
import { Authenticator, Button, Heading, Flex, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';

function TenantDashboard() {
  const navigate = useNavigate();

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Flex direction="column" alignItems="center" padding="2rem" gap="1rem">
          <Heading level={2}>Tenant Dashboard</Heading>
          <Text>Welcome, {user?.username || 'Tenant'}!</Text>
          
          <Flex direction="row" gap="1rem" marginTop="1rem">
            <Button onClick={() => navigate('/profile')}>
              Profile
            </Button>
            <Button onClick={() => navigate('/find-property')}>
              Find Properties
            </Button>
            <Button onClick={() => navigate('/saved-properties')}>
              Saved Properties
            </Button>
          </Flex>
          
          <Button onClick={signOut} variation="primary" marginTop="2rem">
            Sign Out
          </Button>
        </Flex>
      )}
    </Authenticator>
  );
}

export default TenantDashboard;