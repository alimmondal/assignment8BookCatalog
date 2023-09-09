export const bookFilterableFields: string[] = [
  'searchTerm',
  'title',
  'author',
  'genre',
  'bloodGroup',
  'price',
  'publicationDate',
  'categoryId',
];

export const bookSearchableFields: string[] = [
  'title',
  'author',
  'genre',
  'bloodGroup',
  'price',
  'publicationDate',
  'categoryId',
];

export const bookRelationalFields: string[] = ['categoryId'];
export const bookRelationalFieldsMapper: { [key: string]: string } = {
  categoryId: 'categoryId',
};
