// src/pages/FindAppropriateTenant.jsx
import React from 'react';
import { Button, Heading, Flex, Text } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

const FindAppropriateTenant = () => {
  const navigate = useNavigate();

  const handleMoreInfo = () => {
    alert('Please sign in to view more details.');
  };

  return (
    <Flex direction="column" alignItems="center" padding="2rem" gap="1rem">
      <Heading level={2}>Appropriate Tenants</Heading>
      {/* Placeholder for tenant listings */}
      <Flex direction="column" gap="1rem" width="100%">
        <Flex
          border="1px solid #ccc"
          padding="1rem"
          borderRadius="5px"
          direction="column"
          gap="0.5rem"
        >
          <Text fontWeight="bold">Tenant Group 1</Text>
          <Text>Basic info about the tenant group.</Text>
          <Button onClick={handleMoreInfo}>More Info</Button>
        </Flex>
        <Flex
          border="1px solid #ccc"
          padding="1rem"
          borderRadius="5px"
          direction="column"
          gap="0.5rem"
        >
          <Text fontWeight="bold">Tenant Group 2</Text>
          <Text>Basic info about the tenant group.</Text>
          <Button onClick={handleMoreInfo}>More Info</Button>
        </Flex>
        {/* Additional tenant placeholders */}
      </Flex>
    </Flex>
  );
};

export default FindAppropriateTenant;
