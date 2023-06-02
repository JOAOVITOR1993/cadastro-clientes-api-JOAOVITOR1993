import AppDataSource from "../../data-source"
import Contact from "../../entities/contacts.entity"
import { iContactRepo, iCreateContact, iReturnContact } from "../../interfaces/contacts.interfaces"
import { returnContactSchema } from "../../schemas/contacts.schemas"

const createContactService = async (contactData: iCreateContact, clientUserId: number): Promise<iReturnContact> => {
    const contactRepository: iContactRepo = AppDataSource.getRepository(Contact)

    const contact = contactRepository.create({
        ...contactData,
        client: clientUserId
    })

    await contactRepository.save(contact)

    const newContact = returnContactSchema.parse(contact)

    return newContact
}

export default createContactService