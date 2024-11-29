import { parseCSVData } from "../utils/ParseCSVData"

export const getUsersApi = async() => {
    const userslist = await parseCSVData('/src/data/users.csv')
    return userslist
}