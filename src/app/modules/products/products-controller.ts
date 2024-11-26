import { Request, Response } from "express";
import { productService } from "./products-service";



 
const createProduct = async (req: Request, res: Response) => {
    try {
        console.log("🚀 ~ getAllProducts ~ req:", req)
        
        const result =await productService.createProduct(req.body)

        res.send({
            message:"Bicycle created successfully", success:true , data : result
        })
    } catch (error) {
        console.log(error)
        res.send(error)
    }

}


 
const getAllProducts  = async (req: Request, res: Response) => {
    console.log("🚀 ~ createProducts ~ req:", req)
    

    res.send("asdkjabskdj")
}

const getSingleProduct = async (req: Request, res: Response) => {
    console.log("🚀 ~ createProducts ~ req:", req)
    

    res.send("asdkjabskdj")
}

const updateSingleProduct = async (req: Request, res: Response) => {
    console.log("🚀 ~ createProducts ~ req:", req)
    

    res.send("asdkjabskdj")
}

const deleteProduct = async (req: Request, res: Response) => {
    console.log("🚀 ~ createProducts ~ req:", req)
    

    res.send("asdkjabskdj")
}


export const productController = {
    getAllProducts,createProduct,getSingleProduct,updateSingleProduct,deleteProduct
}