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

export const GetDate = (givenDate) => {
    var created_date = new Date(givenDate);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = created_date.getFullYear();
  var month = months[created_date.getMonth()];
  var date = created_date.getDate();
  var time = date + ' ' + month + ' ' + year;
  return time;
}