import { Request, Response, NextFunction } from "express"
import { iClientRepo } from "../interfaces/clients.interfaces"
import AppDataSource from "../data-source"
import Client from "../entities/clients.entity"
import { AppError } from "../erros"

const validateEmailExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const clientRepository: iClientRepo = AppDataSource.getRepository(Client)

    const findEmail = await clientRepository.findOne({
        where: {
            email: req.body.email
        },
        withDeleted: true
    })

    if (findEmail && req.body.email) {
        throw new AppError("Email already exists", 409)
    }

    next()
}

const validatePhoneExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const clientRepository: iClientRepo = AppDataSource.getRepository(Client)

    const findPhone = await clientRepository.findOne({
        where: {
            phone: req.body.phone
        },
        withDeleted: true
    })

    if (findPhone && req.body.phone) {
        throw new AppError("Phone already exists", 409)
    }

    next()
}

const validateClientExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const clientId: number = Number(req.params.id)

    const clientRepository: iClientRepo = AppDataSource.getRepository(Client)

    const findClient = await clientRepository.findOne({
        where: {
            id: clientId
        }
    })

    if (!findClient) {
        throw new AppError("Client not found", 404)
    }

    next()
}

const validateIfClientIsOwner = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const clientId: number = Number(req.params.id)
    const clientUserId: number = Number(res.locals.userId)

    if (clientId !== clientUserId) {
        throw new AppError("You are not allowed to delete, update or read another customer", 403)
    }

    next()
}

export { 
    validateEmailExists, 
    validatePhoneExists,
    validateClientExists,
    validateIfClientIsOwner,
}