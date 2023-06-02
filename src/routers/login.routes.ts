import { Router } from "express"
import validateData from "../middlewares/validateData.middleware"
import loginSchema from "../schemas/login.schemas"
import createLoginController from "../controllers/login.controllers"

const loginRoutes: Router = Router()

loginRoutes.post("", validateData(loginSchema), createLoginController)

export default loginRoutes