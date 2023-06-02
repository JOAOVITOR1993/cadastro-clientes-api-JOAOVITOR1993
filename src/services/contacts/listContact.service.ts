import AppDataSource from "../../data-source"
import Contact from "../../entities/contacts.entity"
import { iContactRepo, iReturnContact } from "../../interfaces/contacts.interfaces"
import { returnContactSchema } from "../../schemas/contacts.schemas"

const listContactService = async (contactId: number): Promise<iReturnContact> => {
    const contactRepository: iContactRepo = AppDataSource.getRepository(Contact)

    const findContact = await contactRepository.findOne({
        where: {
            id: contactId
        },
        relations:{
            client: true
        }
    })

    const contact = returnContactSchema.parse(findContact)

    return contact
}

export default listContactService