import React from 'react';
import { Button, Heading, Flex, Text } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

const PropertyDetails = () => {
  const navigate = useNavigate();

  return (
    <Flex direction="column" alignItems="center" padding="2rem" gap="1rem">
      <Heading level={2}>Property Details</Heading>
      <Text>This is the detailed view of the property. (Under Construction)</Text>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </Flex>
  );
};

export default PropertyDetails;
