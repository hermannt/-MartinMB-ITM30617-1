import sanityClient from '@sanity/client';

const options = {
  projectId: process.eventNames.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET_NAME,
};

const client = sanityClient({
  ...options,
  useCdn: process.env.NODE_ENV === 'production',
});

export default client;
