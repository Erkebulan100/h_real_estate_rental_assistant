import { useState, useEffect } from "react";
import {
  Authenticator,
  Button,
  Text,
  TextField,
  Heading,
  Flex,
  View,
  Image,
  Grid,
  Divider,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { getUrl } from "aws-amplify/storage";
import { uploadData } from "aws-amplify/storage";
import { generateClient } from "aws-amplify/data";
import outputs from "../amplify_outputs.json";

// Configure Amplify using your backend configuration outputs
Amplify.configure(outputs);
const client = generateClient({
  authMode: "userPool",
});

export default function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  // Fetch the list of properties from your backend
  async function fetchProperties() {
    const { data: properties } = await client.models.Property.list();
    await Promise.all(
      properties.map(async (property) => {
        if (property.image) {
          const linkToStorageFile = await getUrl({
            path: ({ identityId }) => `media/${identityId}/${property.image}`,
          });
          console.log(linkToStorageFile.url);
          property.image = linkToStorageFile.url;
        }
        return property;
      })
    );
    console.log(properties);
    setProperties(properties);
  }

  // Create a new property listing
  async function createProperty(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    console.log(form.get("image").name);

    const { data: newProperty } = await client.models.Property.create({
      title: form.get("title"),
      description: form.get("description"),
      price: form.get("price"),
      location: form.get("location"),
      image: form.get("image").name,
    });

    console.log(newProperty);
    if (newProperty.image)
      await uploadData({
        path: ({ identityId }) => `media/${identityId}/${newProperty.image}`,
        data: form.get("image"),
      }).result;

    fetchProperties();
    event.target.reset();
  }

  // Delete an existing property listing
  async function deleteProperty({ id }) {
    const toBeDeletedProperty = { id };
    const { data: deletedProperty } = await client.models.Property.delete(
      toBeDeletedProperty
    );
    console.log(deletedProperty);
    fetchProperties();
  }

  return (
    <Authenticator>
      {({ signOut }) => (
        <Flex
          className="App"
          justifyContent="center"
          alignItems="center"
          direction="column"
          width="70%"
          margin="0 auto"
        >
          <Heading level={1}>Real Estate Rental Assistant</Heading>
          <View as="form" margin="3rem 0" onSubmit={createProperty}>
            <Flex
              direction="column"
              justifyContent="center"
              gap="2rem"
              padding="2rem"
            >
              <TextField
                name="title"
                placeholder="Property Title"
                label="Property Title"
                labelHidden
                variation="quiet"
                required
              />
              <TextField
                name="description"
                placeholder="Property Description"
                label="Property Description"
                labelHidden
                variation="quiet"
                required
              />
              <TextField
                name="price"
                placeholder="Property Price"
                label="Property Price"
                labelHidden
                variation="quiet"
                required
              />
              <TextField
                name="location"
                placeholder="Property Location"
                label="Property Location"
                labelHidden
                variation="quiet"
                required
              />
              <View
                name="image"
                as="input"
                type="file"
                alignSelf="end"
                accept="image/png, image/jpeg"
              />

              <Button type="submit" variation="primary">
                Create Property
              </Button>
            </Flex>
          </View>
          <Divider />
          <Heading level={2}>Current Properties</Heading>
          <Grid
            margin="3rem 0"
            autoFlow="column"
            justifyContent="center"
            gap="2rem"
            alignContent="center"
          >
            {properties.map((property) => (
              <Flex
                key={property.id || property.title}
                direction="column"
                justifyContent="center"
                alignItems="center"
                gap="2rem"
                border="1px solid #ccc"
                padding="2rem"
                borderRadius="5%"
                className="box"
              >
                <View>
                  <Heading level={3}>{property.title}</Heading>
                </View>
                <Text fontStyle="italic">{property.description}</Text>
                <Text>Price: {property.price}</Text>
                <Text>Location: {property.location}</Text>
                {property.image && (
                  <Image
                    src={property.image}
                    alt={`Visual aid for ${property.title}`}
                    style={{ width: 400 }}
                  />
                )}
                <Button
                  variation="destructive"
                  onClick={() => deleteProperty(property)}
                >
                  Delete Property
                </Button>
              </Flex>
            ))}
          </Grid>
          <Button onClick={signOut}>Sign Out</Button>
        </Flex>
      )}
    </Authenticator>
  );
}
