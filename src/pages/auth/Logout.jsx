import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Alert } from "../../utils/alert";

const Logout = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loginToken = JSON.parse(localStorage.getItem("loginToken"));

    axios
      .get("https://ecomadminapi.azhadev.ir/api/auth/logout", {
        headers: {
          Authorization: `Bearer ${loginToken.token}`,
        },
      })
      .then((res) => {
        if (res.status == 200) {
          localStorage.removeItem("loginToken");
          setLoading(false);
        } else {
          Alert("متاسفم", res.data.message, "error");
        }
      })
      .catch((error) => {
        setLoading(false);
        Alert("متاسفم", 'متاسفم. مشکلی از سمت سرور رخ داده', "error");
      });
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
