import { getPurchaseHistoryApi } from "../apis/purchaseHistoryApi"

export const getPurchaseHistory = async (userid) => {
    const response = await getPurchaseHistoryApi()
    const history = response.filter(
        (data) => data.UserID.toLowerCase() === userid.toLowerCase()
    );
    return history
}