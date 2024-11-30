import { parseCSVData } from "../utils/ParseCSVData"

export const getUsersApi = async() => {
    const userslist = await parseCSVData('/E-Commerce/src/data/users.csv')
    return userslist
}