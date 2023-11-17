export const host = "http://localhost:3000";

//authorization routes
export const loginRoute = `${host}/api/auth/login`
export const registerRoute = `${host}/api/auth/register`
export const imageSetRoute = `${host}/api/auth/verifyimage`
export const isLoginRoute = `${host}/api/auth/islogin`

//classroom routes
export const createClassRoom = `${host}/api/classroom/create`
export const joinClassRoom = `${host}/api/classroom/join`
export const openClassRoom = `${host}/api/classroom/open`
export const fetchPeopleRoute = `${host}/api/classroom/fetchpeople`