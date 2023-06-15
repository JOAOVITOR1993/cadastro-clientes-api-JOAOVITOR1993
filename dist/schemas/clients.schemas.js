"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnAllContactsByClient = exports.returnAllClientsSchema = exports.updateClientSchema = exports.returnClientSchema = exports.createClientSchema = void 0;
const zod_1 = require("zod");
const contacts_schemas_1 = require("./contacts.schemas");
const createClientSchema = zod_1.z.object({
    name: zod_1.z.string().max(20),
    email: zod_1.z.string().email().max(100),
    password: zod_1.z.string().max(120),
    phone: zod_1.z.string().max(20),
});
exports.createClientSchema = createClientSchema;
const returnClientSchema = createClientSchema.extend({
    id: zod_1.z.number(),
    created_at: zod_1.z.string(),
    updatedAt: zod_1.z.string().nullable(),
    deletedAt: zod_1.z.string().nullable()
}).omit({ password: true });
exports.returnClientSchema = returnClientSchema;
const updateClientSchema = createClientSchema.partial();
exports.updateClientSchema = updateClientSchema;
const returnAllClientsSchema = zod_1.z.array(returnClientSchema);
exports.returnAllClientsSchema = returnAllClientsSchema;
const returnAllContactsByClient = returnClientSchema.extend({
    contacts: contacts_schemas_1.returnAllContactsSchema
});
exports.returnAllContactsByClient = returnAllContactsByClient;
