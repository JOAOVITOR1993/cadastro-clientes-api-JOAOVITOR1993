import { compare } from "bcryptjs"
import AppDataSource from "../../data-source"
import Client from "../../entities/clients.entity"
import { AppError } from "../../erros"
import { iClientRepo } from "../../interfaces/clients.interfaces"
import iLoginRequest from "../../interfaces/login.interfaces"
import jwt from "jsonwebtoken"
import "dotenv/config"
import { returnClientSchema } from "../../schemas/clients.schemas"

const createLoginService = async (loginData: iLoginRequest): Promise<object> => {

    const userRepository: iClientRepo = AppDataSource.getRepository(Client)

    const findClient = await userRepository.findOneBy({
        email: loginData.email
    })

    if (!findClient) {
        throw new AppError("Invalid credentials", 401)
    }

    if (findClient.deletedAt !== null) {
        throw new AppError("Invalid credentials", 401)
    }

    const comparePassword = await compare(loginData.password, findClient.password)

    if (!comparePassword) {
        throw new AppError("Invalid credentials", 401)
    }

    const token: string = jwt.sign(
        { username: findClient.name },
        String(process.env.SECRET_KEY!),
        {
            expiresIn: String(process.env.EXPIRES_IN),
            subject: String(findClient.id)
        }
    )

    const user = returnClientSchema.parse(findClient)

    return {
        token: token, 
        user: user
    }

}

export default createLoginService 