import { z } from "zod"

const createContactSchema = z.object({
    name: z.string().max(20),
    email: z.string().email().max(100),
    phone: z.string().max(20),
})

const returnContactSchema = createContactSchema.extend({
    id: z.number(),
    created_at: z.string(),
    updatedAt: z.string().nullable(),
    deletedAt: z.string().nullable(),
    client: z.object({
        id: z.number(),
        name: z.string().max(20),
    }).or(z.number()).optional(),
})

const updateContactSchema = createContactSchema.partial()

const returnAllContactsSchema = z.array(returnContactSchema)

export { 
    createContactSchema, 
    returnContactSchema, 
    updateContactSchema,
    returnAllContactsSchema, 
}