const movie = {
  title: 'movie',
  name: 'movie',
  type: 'document',
  fields: [
    {
      title: 'title',
      name: 'title',
      type: 'string',
      description: 'Dette er filmtittel',
    },
    {
      title: 'actor',
      name: 'actor',
      type: 'reference',
      to: [{ type: 'actor' }],
      description: 'Dette er skuespiller',
    },
  ],
};

export default movie;
