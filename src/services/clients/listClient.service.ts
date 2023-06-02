import { iClientRepo, iReturnClient } from "../../interfaces/clients.interfaces"
import AppDataSource from "../../data-source"
import Client from "../../entities/clients.entity"
import { returnAllContactsByClient } from "../../schemas/clients.schemas"


const listClientService = async (idClient: number): Promise<iReturnClient> => {
    const clientRepository: iClientRepo = AppDataSource.getRepository(Client)

    const findClient = await clientRepository.findOne({
        where:{
            id: idClient
        },
        relations: {
            contacts: true
        }
    })

    const client = returnAllContactsByClient.parse(findClient)

    return client
}

export default listClientService