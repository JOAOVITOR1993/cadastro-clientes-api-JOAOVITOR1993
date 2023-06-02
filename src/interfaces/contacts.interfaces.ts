import { z } from "zod"
import { createContactSchema, returnAllContactsSchema, returnContactSchema, updateContactSchema } from "../schemas/contacts.schemas"
import { Repository } from "typeorm"
import Contact from "../entities/contacts.entity"

type iCreateContact = z.infer<typeof createContactSchema>
type iReturnContact = z.infer<typeof returnContactSchema>
type iContactRepo = Repository<Contact>
type iUpdateContact = z.infer<typeof updateContactSchema>
type iAllContacts = z.infer<typeof returnAllContactsSchema>

export {
    iCreateContact,
    iReturnContact,
    iContactRepo,
    iUpdateContact,
    iAllContacts,
}