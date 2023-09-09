"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewRatingRelationalFieldsMapper = exports.reviewRatingRelationalFields = exports.reviewRatingSearchableFields = exports.reviewRatingFilterableFields = void 0;
exports.reviewRatingFilterableFields = [
    'searchTerm',
    'review',
    'rating',
    'bookId',
    'userId',
];
exports.reviewRatingSearchableFields = [
    'review',
    'rating',
    'bookId',
    'userId',
];
exports.reviewRatingRelationalFields = ['bookId', 'userId'];
exports.reviewRatingRelationalFieldsMapper = {
    bookId: 'bookId',
    userId: 'userId',
};
