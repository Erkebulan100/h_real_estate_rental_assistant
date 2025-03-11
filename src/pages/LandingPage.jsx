import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Heading, Flex } from '@aws-amplify/ui-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      padding="2rem"
      gap="1rem"
    >
      <Heading level={1}>Welcome to Real Estate Rental Assistant</Heading>
      <Flex direction="row" gap="1rem" marginTop="1rem">
        <Button onClick={() => navigate('/find-property')}>
          Search for a House/Flat for Rent
        </Button>
        <Button onClick={() => navigate('/find-tenant')}>
          Find an Appropriate Tenant
        </Button>
      </Flex>
    </Flex>
  );
};

export default LandingPage;
