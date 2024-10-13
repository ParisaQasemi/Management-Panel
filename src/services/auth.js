import httpService from "./httpService";

export const loginService = (valuse)=> {
    return httpService("/auth/login", "post", {
        ...valuse,
        remember: valuse.remember ? 1 : 0 ,
    });
};

export const logoutService = ()=> {
    return httpService("/auth/logout", "get")
}

export const getUserService = () => {
    return httpService('/auth/user', 'get')
}