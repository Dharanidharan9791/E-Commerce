import { parseCSVData } from "../Common/ParseCSVData"

export const getUsersApi = async() => {
    const userslist = await parseCSVData('/src/data/users.csv')
    return userslist
}