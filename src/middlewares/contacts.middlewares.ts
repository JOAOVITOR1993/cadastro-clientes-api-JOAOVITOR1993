import { Request, Response, NextFunction } from "express"
import { iContactRepo } from "../interfaces/contacts.interfaces"
import AppDataSource from "../data-source"
import Contact from "../entities/contacts.entity"
import { AppError } from "../erros"

const validateEmailExistsContact = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const contactRepository: iContactRepo = AppDataSource.getRepository(Contact)
    const contactId = Number(req.params.id)
    
    const findEmail = await contactRepository.findOne({
        where: {
            email: req.body.email
        },
        withDeleted: true
    })

    if (findEmail && req.body.email && contactId !== findEmail.id) {
        throw new AppError("Email already exists", 409)
    }

    next()
}

const validatePhoneExistsContact = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const contactRepository: iContactRepo = AppDataSource.getRepository(Contact)
    const contactId = Number(req.params.id)

    const findPhone = await contactRepository.findOne({
        where: {
            phone: req.body.phone
        },
        withDeleted: true
    })

    if (findPhone && req.body.phone && contactId !== findPhone.id) {
        throw new AppError("Phone already exists", 409)
    }

    next()
}

const validateContactExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const contactId: number = Number(req.params.id)

    const contactRepository: iContactRepo = AppDataSource.getRepository(Contact)

    const findContact = await contactRepository.findOne({
        where: {
            id: contactId
        }
    })

    if (!findContact) {
        throw new AppError("Contact not found", 404)
    }

    next()
}

const validateIfClientIsOwnerContact = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const contactId: number = Number(req.params.id)
    const clientUserId: number = Number(res.locals.userId)

    const contactRepository: iContactRepo = AppDataSource.getRepository(Contact)

    const findContact = await contactRepository.findOne({
        where: {
            id: contactId
        },
        relations: {
            client: true
        }
    })

    const clientOwnerContactId = Object(findContact?.client).id

    if (clientUserId !== clientOwnerContactId) {
        throw new AppError("You are only authorized to delete, update or read your contact", 403)
    }

    next()
}

export {
    validateEmailExistsContact,
    validatePhoneExistsContact,
    validateContactExists,
    validateIfClientIsOwnerContact
}