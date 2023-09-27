"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRelationalFieldsMapper = exports.orderRelationalFields = exports.orderSearchableFields = exports.orderFilterableFields = void 0;
exports.orderFilterableFields = [
    'searchTerm',
    'orderId',
    'userId',
    'quantity',
    'bookId',
];
exports.orderSearchableFields = [
    'orderId',
    'userId',
    'quantity',
    'bookId',
];
exports.orderRelationalFields = ['userId', 'bookId'];
exports.orderRelationalFieldsMapper = {
    bookId: 'bookId',
    userId: 'userId',
};
