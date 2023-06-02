import { z } from "zod"
import { returnAllContactsSchema } from "./contacts.schemas"

const createClientSchema = z.object({
    name: z.string().max(20),
    email: z.string().email().max(100),
    password: z.string().max(120),
    phone: z.string().max(20),
})

const returnClientSchema = createClientSchema.extend({
    id: z.number(),
    created_at: z.string(),
    updatedAt: z.string().nullable(),
    deletedAt: z.string().nullable()
}).omit({ password: true })

const updateClientSchema = createClientSchema.partial()

const returnAllClientsSchema = z.array(returnClientSchema)

const returnAllContactsByClient = returnClientSchema.extend({
    contacts: returnAllContactsSchema
})

export { 
    createClientSchema, 
    returnClientSchema, 
    updateClientSchema,
    returnAllClientsSchema, 
    returnAllContactsByClient,
}