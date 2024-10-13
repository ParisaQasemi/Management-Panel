import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../../pages/auth/Login";
import { useIsLogin } from "../../hooks/authHooks";

const AuthLayout = () => {
  const [loading, isLogin] = useIsLogin();
  return (
    <div>
      {loading ? (
        <h1 className="text-center font-bold text-xl">لطفا صبر کنید ...</h1>
      ) : !isLogin ? (
        <>
          <Routes>
            <Route path="/auth/Login" element={<Login />} />
          </Routes>
        </>
      ) : (
        <Navigate to={"/"} />
      )}
    </div>
  );
};

export default AuthLayout;
