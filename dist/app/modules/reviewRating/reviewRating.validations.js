"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        review: zod_1.z.string({
            required_error: 'Review is required',
        }),
        rating: zod_1.z.number({
            required_error: 'Rating is required',
        }),
        userId: zod_1.z.string({
            required_error: 'UserId is required',
        }),
        bookId: zod_1.z.string({
            required_error: 'BookId is required',
        }),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        review: zod_1.z.string().optional(),
        rating: zod_1.z.number().optional(),
        userId: zod_1.z.string().optional(),
        bookId: zod_1.z.string().optional(),
    }),
});
exports.ReviewValidation = {
    create,
    update,
};
