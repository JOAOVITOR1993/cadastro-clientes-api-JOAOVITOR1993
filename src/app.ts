import "express-async-errors"
import express, { Application } from "express"
import { handleErros } from "./erros"
import clientsRoutes from "./routers/clients.routes"
import loginRoutes from "./routers/login.routes"
import contactsRoutes from "./routers/contacts.routes"
import cors from "cors"

const app: Application = express()
app.use(cors())
app.use(express.json())

app.use("/clients", clientsRoutes)
app.use("/login", loginRoutes)
app.use("/contacts", contactsRoutes)

app.use(handleErros)

export default app