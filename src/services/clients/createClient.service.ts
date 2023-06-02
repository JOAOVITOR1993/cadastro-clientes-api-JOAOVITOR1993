import AppDataSource from "../../data-source";
import Client from "../../entities/clients.entity";
import { iClientRepo, iCreateClient, iReturnClient } from "../../interfaces/clients.interfaces";
import { returnClientSchema } from "../../schemas/clients.schemas";

const createClientService = async (clientData: iCreateClient): Promise<iReturnClient> => {
    const clientRepository: iClientRepo = AppDataSource.getRepository(Client)

    const client = clientRepository.create(clientData)

    await clientRepository.save(client)

    const newUser = returnClientSchema.parse(client)

    return newUser
}

export default createClientService