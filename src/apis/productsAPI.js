import { parseCSVData } from "../utils/ParseCSVData"

export const getProductsApi = async() => {
    const productslist = await parseCSVData('/E-Commerce/src/data/products.csv')
    return productslist
}