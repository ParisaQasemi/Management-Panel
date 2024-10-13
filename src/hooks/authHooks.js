import axios from "axios";
import { useEffect, useState } from "react";
import { getUserService } from "../services/auth";

export const useIsLogin = ()=> {
    const [isLogin, setIsLogin] = useState(false);
    const [loading, setIsLoading] = useState(true);

    const handleCheckLogin = async()=> {
      try {
        const res = await getUserService()
        setIsLogin(res.status == 200 ? true : false)
        setIsLoading(false)
      } catch (error) {
        localStorage.removeItem('loginToken')
        setIsLogin(false)
        setIsLoading(false)
      }
    }
  
    useEffect(() => {
      const loginToken = JSON.parse(localStorage.getItem("loginToken"));

      if (loginToken) {
        handleCheckLogin()
      } else {
        setIsLogin(false);
        setIsLoading(false);
      }
    }, []);

    return [loading, isLogin]
}