import { parseCSVData } from "../Common/ParseCSVData"

export const getPurchaseHistoryApi = async() => {
    const purchaselist = await parseCSVData('/src/data/purchase_history.csv')
    return purchaselist
}