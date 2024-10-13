import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Alert } from "../../utils/alert";
import { logoutService } from "../../services/auth";

const Logout = () => {
  const [loading, setLoading] = useState(true);
  const handleLogout = async ()=>{
    try {
        const res = await logoutService();
        if(res.status == 200) {
            localStorage.removeItem("loginToken")
        } else {
            Alert("متاسفم", res.data.message, "error");
        }
        setLoading(false)
    } catch (error) {
        setLoading(false)
        // Alert("متاسفم", 'مشکلی از سمت سرور رخ داده', "error");
    }
  }

  useEffect(() => {
    handleLogout()
  }, []);

  return (
    <>
      {loading ? (
        <h1 className="text-center font-bold text-3xll pt-20">
          لطفا صبر کنید ...
        </h1>
      ) : (
        <Navigate to="/auth/login" />
      )}
    </>
  );
};

export default Logout;
