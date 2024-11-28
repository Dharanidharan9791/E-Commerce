import { parseCSVData } from "../Common/ParseCSVData"

export const getProductsApi = async() => {
    const productslist = await parseCSVData('/src/data/products.csv')
    return productslist
}