import client from './client';

const movie = `
 title,
 'actor': actor->name,
`;

export const getMovies = async () => {
  const data = await client.fetch(`*[_type == 'movie']
  {${movie}}`);
  return data;
};
