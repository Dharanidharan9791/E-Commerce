import { parseCSVData } from "../utils/ParseCSVData"

export const getPurchaseHistoryApi = async() => {
    const purchaselist = await parseCSVData('/E-Commerce/data/purchase_history.csv')
    return purchaselist
}