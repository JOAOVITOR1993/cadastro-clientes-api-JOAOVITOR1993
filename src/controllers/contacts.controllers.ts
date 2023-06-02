import { Request, Response } from "express"
import { iCreateContact, iUpdateContact } from "../interfaces/contacts.interfaces"
import createContactService from "../services/contacts/createContact.service"
import listContactService from "../services/contacts/listContact.service"
import removeContactService from "../services/contacts/removeContact.service"
import updateContactService from "../services/contacts/updateContact.service"

const createContactController = async (req: Request, res: Response) => {
    const contactData: iCreateContact = req.body
    const clientUserId: number = Number(res.locals.userId)

    const newContact = await createContactService(contactData, clientUserId)

    return res.status(201).json(newContact)
}

const listContactController = async (req: Request, res: Response) => {
    const contactId: number = Number(req.params.id)

    const listContact = await listContactService(contactId)

    return res.status(200).json(listContact)
}

const removeContactController = async (req: Request, res: Response) => {
    const contactId: number = Number(req.params.id)

    await removeContactService(contactId)

    return res.status(204).send()
}

const updateContactController = async (req: Request, res: Response) => {
    const contactId: number = Number(req.params.id)
    const contactData: iUpdateContact = req.body

    const updatedContact = await updateContactService(contactId, contactData)

    return res.status(200).json(updatedContact)
}

export {
    createContactController,
    listContactController,
    removeContactController,
    updateContactController
}