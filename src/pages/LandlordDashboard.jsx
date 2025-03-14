// src/pages/LandlordDashboard.jsx
import React from 'react';
import { Authenticator, Button, Heading, Flex, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';

function LandlordDashboard() {
  const navigate = useNavigate();

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Flex direction="column" alignItems="center" padding="2rem" gap="1rem">
          <Heading level={2}>Landlord Dashboard</Heading>
          <Text>Welcome, {user?.username || 'Landlord'}!</Text>
          
          <Flex direction="row" gap="1rem" marginTop="1rem">
            <Button onClick={() => navigate('/profile')}>
              Profile
            </Button>
            <Button onClick={() => navigate('/post-property')}>
              Post a Property
            </Button>
            <Button onClick={() => navigate('/my-properties')}>
              My Properties
            </Button>
            <Button onClick={() => navigate('/find-tenant')}>
              Find Tenants
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

export default LandlordDashboard;