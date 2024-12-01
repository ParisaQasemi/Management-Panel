import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Actions = ({rowData, handleDeleteDiscount}) => {
  const navigate = useNavigate();

    return (
        <>
          <button
            className="mx-1 cursor-pointer text-yellow-500"
            title="ویرایش کد تخفیف"
            onClick={() => navigate('add-discount-code', {state:{discountToEdit:rowData}})}
          >
            <FaEdit />
          </button>
    
          <button
            className="mx-1 cursor-pointer text-red-500"
            title="حذف کد تخفیف"
            onClick={()=>handleDeleteDiscount(rowData)}
            >
            <MdDelete />
          </button>
        </>
      );
}

export default Actions;
