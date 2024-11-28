import { getUsersApi } from "../apis/getUsers";

export const authenticateUser = async (username, password) => {
    const result = {
        userDetails: { isLoggedIn: false, userID: "", userName: "" },
        flag: false,
        message: ""
    };

    try {
        const response = await getUsersApi();
        const user = response.find(
            (data) => data.Username.toLowerCase() === username.toLowerCase()
        );

        if (user) {
            if (user.Password === password) {
                return {
                    userDetails: { isLoggedIn: true, userID: user.UserID, userName: user.Username },
                    flag: true,
                    message: "Successfully Authenticated"
                };
            } else {
                return {
                    ...result,
                    message: "Incorrect Password"
                };
            }
        } else {
            return {
                ...result,
                message: "Incorrect Username"
            };
        }
    } catch (error) {
        console.error("Error during authentication:", error);
        return {
            ...result,
            message: "An error occurred while authenticating"
        };
    }
};
