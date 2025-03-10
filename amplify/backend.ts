import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';

/**
 * Backend configuration for the Real Estate Rental Assistant.
 * This configuration sets up:
 *  - Auth: For user authentication via AWS Cognito.
 *  - Data: For managing Property records with per-owner authorization.
 *  - Storage: For secure file uploads (e.g., property images and documents),
 *             ensuring only the uploader (owner) has access.
 *
 * For additional customization and to add more resources (functions, etc.),
 * please refer to the official Amplify documentation:
 * https://docs.amplify.aws/react/build-a-backend/
 */
defineBackend({
  auth,
  data,
  storage,
});
