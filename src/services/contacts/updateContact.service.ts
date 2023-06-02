import AppDataSource from "../../data-source"
import Contact from "../../entities/contacts.entity"
import { iContactRepo, iReturnContact, iUpdateContact } from "../../interfaces/contacts.interfaces"
import { returnContactSchema } from "../../schemas/contacts.schemas"

const updateContactService = async (contactId: number, contactData: iUpdateContact | any): Promise<iReturnContact> => {
    const contactRepository: iContactRepo = AppDataSource.getRepository(Contact)

    const oldContactData = await contactRepository.findOneBy({
        id: contactId
    })

    const contact = contactRepository.create({
        ...oldContactData,
        ...contactData
    })

    await contactRepository.save(contact)

    const updatedContact = returnContactSchema.parse(contact)

    return updatedContact
}

export default updateContactService