import { iAllClients, iClientRepo } from "../../interfaces/clients.interfaces"
import AppDataSource from "../../data-source"
import Client from "../../entities/clients.entity"
import { returnAllClientsSchema } from "../../schemas/clients.schemas"

const listAllClientsService = async (): Promise<iAllClients> => {
    const clientRepository: iClientRepo = AppDataSource.getRepository(Client)

    const findAllClients = await clientRepository.find()

    const clients = returnAllClientsSchema.parse(findAllClients)

    return clients
}

export default listAllClientsService