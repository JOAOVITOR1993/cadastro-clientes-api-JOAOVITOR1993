import AppDataSource from "../../data-source"
import Client from "../../entities/clients.entity"
import { iClientRepo, iReturnClient, iUpdateClient } from "../../interfaces/clients.interfaces"
import { returnClientSchema } from "../../schemas/clients.schemas"

const updateClientService = async (idClient: number, clientData: iUpdateClient | any): Promise<iReturnClient> => {
    const clientRepository: iClientRepo = AppDataSource.getRepository(Client)

    const oldClientData = await clientRepository.findOneBy({
        id: idClient
    })

    const client = clientRepository.create({
        ...oldClientData,
        ...clientData
    })

    await clientRepository.save(client)

    const updatedClient = returnClientSchema.parse(client)

    return updatedClient
}

export default updateClientService