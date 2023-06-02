import { Request, Response } from "express"
import { iCreateClient, iUpdateClient } from "../interfaces/clients.interfaces"
import createClientService from "../services/clients/createClient.service"
import listAllClientsService from "../services/clients/listAllClients.service"
import removeClientService from "../services/clients/removeClient.service"
import updateClientService from "../services/clients/updateClient.service"
import listClientService from "../services/clients/listClient.service"

const createClientController = async (req: Request, res: Response) => {
    const clientData: iCreateClient = req.body

    const newClient = await createClientService(clientData)

    return res.status(201).json(newClient)
}

const listAllClientsController = async (req: Request, res: Response) => {
    const allClients = await listAllClientsService()

    return res.status(200).json(allClients)
}

const listClientController = async (req: Request, res: Response) => {
    const idClient = Number(req.params.id)

    const listClient = await listClientService(idClient)

    return res.status(200).json(listClient)
}

const removeClientController = async (req: Request, res: Response) => {
    const idClient = Number(req.params.id)

    await removeClientService(idClient)

    return res.status(204).send()
}

const updateClientController = async (req: Request, res: Response) => {
    const idClient = Number(req.params.id)
    const clientData: iUpdateClient = req.body

    const updatedClient = await updateClientService(idClient, clientData)

    return res.status(200).json(updatedClient)
}

export {
    createClientController,
    listAllClientsController,
    removeClientController,
    updateClientController,
    listClientController,
}