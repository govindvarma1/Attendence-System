import { isLoginRoute } from "../Utils/APIRoutes";

export const isLogin = async () => {
    try {
        let user = JSON.parse(localStorage.getItem("user"));
        const response = await fetch(isLoginRoute, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ user: user }),
        });
        if (response.status === 200) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}