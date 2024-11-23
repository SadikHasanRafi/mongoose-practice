import { Request, Response } from "express";
import { UserService } from "./user.service";



const createUser = async (req:Request, res:Response) => {
    const result = await UserService.createUser(req.body) 

    res.send(result)
}

export const UserController = {
    createUser
}