import client from './client';

const movieFields = `
 title,
 'actor': actor->name,
`;

export const getTitle = async () => {
  const data = await client.fetch(`*[_type == 'movie']{title} 
  {${movieFields}}`);
  return data;
};

export const getActor = async () => {
  const data = await client.fetch(`*[_type == 'movie']{actor} 
  {${movieFields}}`);
  return data;
};
