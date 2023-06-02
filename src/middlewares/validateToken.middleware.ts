import { Request, Response, NextFunction } from "express"
import { AppError } from "../erros"
import jwt from "jsonwebtoken"
import "dotenv/config"

const validateToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    let token = req.headers.authorization

    if (!token) {
        throw new AppError("Missing bearer token", 401)
    }

    token = token.split(" ")[1]

    jwt.verify(token, String(process.env.SECRET_KEY!), (error, decoded: any) => {
        if (error) {
            throw new AppError(error.message, 401)
        }

        res.locals.userId = decoded.sub

        next()
    })

}

export default validateToken 