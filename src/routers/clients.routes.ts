import { Router } from "express"
import { createClientController, listAllClientsController, listClientController, removeClientController, updateClientController } from "../controllers/clients.controllers"
import validateData from "../middlewares/validateData.middleware"
import { createClientSchema, updateClientSchema } from "../schemas/clients.schemas"
import { validateClientExists, validateEmailExists, validateIfClientIsOwner, validatePhoneExists } from "../middlewares/clients.middlewares"
import validateToken from "../middlewares/validateToken.middleware"

const clientsRoutes: Router = Router()

clientsRoutes.post("", validateData(createClientSchema), validateEmailExists, validatePhoneExists, createClientController)
clientsRoutes.get("", validateToken, listAllClientsController)
clientsRoutes.get("/:id", validateToken, validateClientExists, validateIfClientIsOwner, listClientController)
clientsRoutes.delete("/:id", validateToken, validateClientExists, validateIfClientIsOwner, removeClientController)
clientsRoutes.patch("/:id", validateToken, validateClientExists, validateIfClientIsOwner, validateData(updateClientSchema), validateEmailExists, validatePhoneExists, updateClientController)

export default clientsRoutes