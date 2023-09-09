"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'First name is required',
        }),
        author: zod_1.z.string({
            required_error: 'Last name is required',
        }),
        price: zod_1.z.number({
            required_error: 'Middle name is required',
        }),
        genre: zod_1.z.string({
            required_error: 'Profile image is required',
        }),
        categoryId: zod_1.z.string({
            required_error: 'Email is required',
        }),
        publicationDate: zod_1.z.string().optional(),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        author: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        genre: zod_1.z.string().optional(),
        categoryId: zod_1.z.string().optional(),
        publicationDate: zod_1.z.string().optional(),
    }),
});
// const assignOrRemoveCourses = z.object({
//   body: z.object({
//     courses: z.array(z.string(), {
//       required_error: 'Courses are required',
//     }),
//   }),
// });
exports.BookValidation = {
    create,
    update,
};
