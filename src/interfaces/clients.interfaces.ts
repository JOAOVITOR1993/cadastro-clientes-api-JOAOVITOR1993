import { z } from "zod"
import { createClientSchema, returnAllClientsSchema, returnClientSchema, updateClientSchema } from "../schemas/clients.schemas";
import { Repository } from "typeorm";
import Client from "../entities/clients.entity";

type iCreateClient = z.infer<typeof createClientSchema>
type iReturnClient = z.infer<typeof returnClientSchema>
type iClientRepo = Repository<Client>
type iUpdateClient = z.infer<typeof updateClientSchema>
type iAllClients = z.infer<typeof returnAllClientsSchema>

export {
    iCreateClient,
    iReturnClient,
    iClientRepo,
    iUpdateClient,
    iAllClients
}