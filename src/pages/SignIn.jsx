// src/pages/SignIn.jsx
import React, { useState, useEffect } from 'react';
import { 
  Authenticator, 
  useAuthenticator, 
  Button, 
  Heading, 
  Text, 
  SelectField, 
  Flex 
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';

// This component handles role selection after authentication
function PostAuthRoleSelector() {
  const navigate = useNavigate();
  const { user, signOut } = useAuthenticator((context) => [context.user, context.signOut]);
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true);
  const [hasRole, setHasRole] = useState(false);

  // Check if user already has a role on component mount
  useEffect(() => {
    const checkUserRole = async () => {
      try {
        // Get the user's sub (unique identifier)
        const userId = user.userId || user.username;
        
        // Check localStorage for saved role
        const savedRole = localStorage.getItem(`user_role_${userId}`);
        
        if (savedRole) {
          // User already has a role, redirect
          if (savedRole === 'landlord') {
            navigate('/landlord-dashboard');
          } else if (savedRole === 'tenant') {
            navigate('/tenant-dashboard');
          }
          setHasRole(true);
        } else {
          // New user without a role
          setHasRole(false);
        }
      } catch (error) {
        console.error('Error checking user role:', error);
      } finally {
        setLoading(false);
      }
    };
    
    checkUserRole();
  }, [navigate, user]);

  const handleRoleSelect = () => {
    if (!role) {
      alert('Please select a role (Landlord or Tenant)');
      return;
    }
    
    try {
      // Get the user's sub (unique identifier)
      const userId = user.userId || user.username;
      
      // Save role to localStorage
      localStorage.setItem(`user_role_${userId}`, role.toLowerCase());
      
      // Navigate based on selected role
      if (role.toLowerCase() === 'landlord') {
        navigate('/landlord-dashboard');
      } else {
        navigate('/tenant-dashboard');
      }
    } catch (error) {
      console.error('Error saving user role:', error);
      alert('An error occurred. Please try again.');
    }
  };

  if (loading) {
    return (
      <Flex direction="column" alignItems="center" padding="2rem" gap="1rem">
        <Heading level={2}>Welcome {user?.username}</Heading>
        <Text>Loading your profile...</Text>
      </Flex>
    );
  }

  if (!hasRole) {
    return (
      <Flex direction="column" alignItems="center" padding="2rem" gap="1rem">
        <Heading level={2}>Welcome to Real Estate Rental Assistant</Heading>
        <Text>Please select your role to continue:</Text>
        
        <SelectField
          label="I am a:"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          marginBottom="1rem"
        >
          <option value="">Select a role</option>
          <option value="tenant">Tenant - I'm looking for properties to rent</option>
          <option value="landlord">Landlord - I have properties to rent out</option>
        </SelectField>
        
        <Button onClick={handleRoleSelect} variation="primary">
          Continue
        </Button>
        <Button onClick={signOut} variation="link" marginTop="1rem">
          Sign Out
        </Button>
      </Flex>
    );
  }

  // Default case - should not normally reach here due to redirects
  return (
    <Flex direction="column" alignItems="center" padding="2rem" gap="1rem">
      <Heading level={2}>Welcome {user?.username}</Heading>
      <Text>You're now signed in. Redirecting...</Text>
      <Button onClick={signOut} marginTop="1rem">Sign Out</Button>
    </Flex>
  );
}

function SignIn() {
  return (
    <Authenticator hideSignUp={false}>
      {() => <PostAuthRoleSelector />}
    </Authenticator>
  );
}

export default SignIn;