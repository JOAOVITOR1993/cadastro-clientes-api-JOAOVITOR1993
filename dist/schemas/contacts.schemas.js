"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnAllContactsSchema = exports.updateContactSchema = exports.returnContactSchema = exports.createContactSchema = void 0;
const zod_1 = require("zod");
const createContactSchema = zod_1.z.object({
    name: zod_1.z.string().max(20),
    email: zod_1.z.string().email().max(100),
    phone: zod_1.z.string().max(20),
});
exports.createContactSchema = createContactSchema;
const returnContactSchema = createContactSchema.extend({
    id: zod_1.z.number(),
    created_at: zod_1.z.string(),
    updatedAt: zod_1.z.string().nullable(),
    deletedAt: zod_1.z.string().nullable(),
    client: zod_1.z.object({
        id: zod_1.z.number(),
        name: zod_1.z.string().max(20),
    }).or(zod_1.z.number()).optional(),
});
exports.returnContactSchema = returnContactSchema;
const updateContactSchema = createContactSchema.partial();
exports.updateContactSchema = updateContactSchema;
const returnAllContactsSchema = zod_1.z.array(returnContactSchema);
exports.returnAllContactsSchema = returnAllContactsSchema;
