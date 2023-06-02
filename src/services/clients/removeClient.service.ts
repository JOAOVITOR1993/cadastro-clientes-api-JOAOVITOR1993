import AppDataSource from "../../data-source"
import Client from "../../entities/clients.entity"
import { AppError } from "../../erros"
import { iClientRepo } from "../../interfaces/clients.interfaces"


const removeClientService = async (idClient: number): Promise<void> => {
    const clientRepository: iClientRepo = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOneBy({
        id: idClient
    })

    if (client!.deletedAt) {
        throw new AppError("Client already deleted", 400)
    }

    await clientRepository.softRemove(client!)

}

export default removeClientService


