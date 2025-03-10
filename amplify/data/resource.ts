import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Property: a
    .model({
      title: a.string(),
      description: a.string(),
      price: a.string(), // Adjust type if needed, e.g., a.number() if available.
      location: a.string(),
      image: a.string(),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});
