import React from "react";
import { useNavigate } from "react-router-dom";

const PrevPageButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="bg-gray-500 text-white p-2 rounded text-sm"
        onClick={() => navigate(-1)}
      >
        بازگشت
      </button>
    </div>
  );
};

export default PrevPageButton;
