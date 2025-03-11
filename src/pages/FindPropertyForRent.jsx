// src/pages/FindPropertyForRent.jsx
import React from 'react';
import { Button, Heading, Flex, Text } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import * as AWSAmplify from 'aws-amplify';
const { Auth } = AWSAmplify;

const FindPropertyForRent = () => {
  const navigate = useNavigate();

  const handleMoreInfo = async () => {
    try {
      // Check if user is authenticated
      await Auth.currentAuthenticatedUser();
      // Navigate to property details if authenticated
      navigate('/property-details');
    } catch (error) {
      // Prompt user to sign in if not authenticated
      alert('Please sign in to view more details.');
      navigate('/sign-in');
    }
  };

  return (
    <Flex direction="column" alignItems="center" padding="2rem" gap="1rem">
      <Heading level={2}>Properties for Rent</Heading>
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
        {/* Add more property placeholders as needed */}
      </Flex>
    </Flex>
  );
};

export default FindPropertyForRent;
