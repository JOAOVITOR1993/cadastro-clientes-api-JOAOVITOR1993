import AppDataSource from "../../data-source"
import Contact from "../../entities/contacts.entity"
import { AppError } from "../../erros"
import { iContactRepo } from "../../interfaces/contacts.interfaces"

const removeContactService = async (contactId: number): Promise<void> => {
    const contactRepository: iContactRepo = AppDataSource.getRepository(Contact)

    const contact = await contactRepository.findOneBy({
        id: contactId
    })

    if (contact!.deletedAt) {
        throw new AppError("Contact already deleted", 400)
    }

    await contactRepository.remove(contact!)

}

export default removeContactService