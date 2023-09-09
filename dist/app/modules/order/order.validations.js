"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string({
            required_error: 'UserId is required',
        }),
        orderedBooks: zod_1.z.any({
            required_error: 'OrderedBooks name is required',
        }),
        status: zod_1.z.string().optional(),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string(),
        orderedBooks: zod_1.z.any(),
        status: zod_1.z.string().optional(),
    }),
});
exports.OrderValidation = {
    create,
    update,
};
