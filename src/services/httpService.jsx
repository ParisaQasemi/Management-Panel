import axios from "axios"
import config from './config.json'
import { Alert } from "../utils/alert";

axios.interceptors.response.use((res)=> {
    if( res.status != 200 && res.status != 201 ) {
        Alert("مشکل !", res.data.message, "error");
    }
    return res
}, (error)=> {
    Alert(error.response.status , "مشکلی رخ داده", "error");
    return Promise.reject(error)
})

const httpService = (url, method, data=null) => {
    const tokenInfo = JSON.parse(localStorage.getItem('loginToken'))
    return axios({
        url: config.onlineApi+url,
        method,
        data,
        headers: {
            Authorization: tokenInfo ? `Bearer ${tokenInfo.token}` : null ,
            "Content-Type": "application/json"
        }
    })
}

export default httpService