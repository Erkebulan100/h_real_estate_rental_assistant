// src/pages/FindPropertyForRent.jsx
import React from 'react';
import { Button, Heading, Flex, Text } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

const FindPropertyForRent = () => {
  const navigate = useNavigate();

  const handleMoreInfo = () => {
    // For now, we simply alert the user to sign in.
    // Later, you might navigate to a detailed view if authenticated.
    alert('Please sign in to view more details.');
  };

  return (
    <Flex direction="column" alignItems="center" padding="2rem" gap="1rem">
      <Heading level={2}>Properties for Rent</Heading>
      {/* Placeholder for property listings */}
      <Flex direction="column" gap="1rem" width="100%">
        <Flex
          border="1px solid #ccc"
          padding="1rem"
          borderRadius="5px"
          direction="column"
          gap="0.5rem"
        >
          <Text fontWeight="bold">Property Title 1</Text>
          <Text>Basic description of the property.</Text>
          <Button onClick={handleMoreInfo}>More Info</Button>
        </Flex>
        <Flex
          border="1px solid #ccc"
          padding="1rem"
          borderRadius="5px"
          direction="column"
          gap="0.5rem"
        >
          <Text fontWeight="bold">Property Title 2</Text>
          <Text>Basic description of the property.</Text>
          <Button onClick={handleMoreInfo}>More Info</Button>
        </Flex>
        {/* You can add more property placeholders as needed */}
      </Flex>
    </Flex>
  );
};

export default FindPropertyForRent;
