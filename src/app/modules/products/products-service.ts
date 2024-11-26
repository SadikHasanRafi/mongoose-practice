import IProduct from "./products-interface";
import { ProductModel } from "./products-model";


const createProduct = async (data:IProduct) => {
    console.log("🚀 ~ createProduct ~ data:", data)
    const result = await ProductModel.create(data)
    console.log("🚀 ~ createProduct ~ result:", result)
    return result
}



export const productService = {
    createProduct
}