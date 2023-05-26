import express, { Application } from "express"

const app: Application = express()
app.use(express.json())

// app.use("/clients", clientsRoutes)
// app.use("/login", loginRoutes)

export default app