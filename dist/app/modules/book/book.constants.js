"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRelationalFieldsMapper = exports.bookRelationalFields = exports.bookSearchableFields = exports.bookFilterableFields = void 0;
exports.bookFilterableFields = [
    'searchTerm',
    'title',
    'author',
    'genre',
    'bloodGroup',
    'price',
    'publicationDate',
    'categoryId',
];
exports.bookSearchableFields = [
    'title',
    'author',
    'genre',
    'bloodGroup',
    'price',
    'publicationDate',
    'categoryId',
];
exports.bookRelationalFields = ['categoryId'];
exports.bookRelationalFieldsMapper = {
    categoryId: 'categoryId',
};
