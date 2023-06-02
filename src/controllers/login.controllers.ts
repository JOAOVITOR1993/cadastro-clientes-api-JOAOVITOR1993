import { Request, Response } from "express"
import iLoginRequest from "../interfaces/login.interfaces"
import createLoginService from "../services/login/createLogin.service"

const createLoginController = async (req: Request, res: Response) => {

    const loginData: iLoginRequest = req.body

    const token = await createLoginService(loginData)

    return res.status(200).json({
        token: token
    })
}

export default createLoginController