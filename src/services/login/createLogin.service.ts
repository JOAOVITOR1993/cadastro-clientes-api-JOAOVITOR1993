import { compare } from "bcryptjs"
import AppDataSource from "../../data-source"
import Client from "../../entities/clients.entity"
import { AppError } from "../../erros"
import { iClientRepo } from "../../interfaces/clients.interfaces"
import iLoginRequest from "../../interfaces/login.interfaces"
import jwt from "jsonwebtoken"
import "dotenv/config"

const createLoginService = async (loginData: iLoginRequest): Promise<string> => {

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

    return token

}

export default createLoginService 