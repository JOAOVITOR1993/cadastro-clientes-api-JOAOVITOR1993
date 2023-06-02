import { Router } from "express"
import { createContactSchema, updateContactSchema } from "../schemas/contacts.schemas"
import validateData from "../middlewares/validateData.middleware"
import { validateContactExists, validateEmailExistsContact, validateIfClientIsOwnerContact, validatePhoneExistsContact } from "../middlewares/contacts.middlewares"
import { createContactController, listContactController, removeContactController, updateContactController } from "../controllers/contacts.controllers"
import validateToken from "../middlewares/validateToken.middleware"

const contactsRoutes: Router = Router()

contactsRoutes.post("", validateToken, validateData(createContactSchema), validateEmailExistsContact, validatePhoneExistsContact, createContactController)
contactsRoutes.get("/:id", validateToken, validateContactExists, validateIfClientIsOwnerContact, listContactController)
contactsRoutes.delete("/:id", validateToken, validateContactExists, validateIfClientIsOwnerContact, removeContactController)
contactsRoutes.patch("/:id", validateToken, validateContactExists, validateIfClientIsOwnerContact, validateData(updateContactSchema), validateEmailExistsContact, validatePhoneExistsContact, updateContactController)

export default contactsRoutes