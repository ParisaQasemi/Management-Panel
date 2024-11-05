import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const Actions = ({ rowData, setshowModal, handleDeleteProduct }) => {
    return (
      <>
        <button
          className="mx-1 cursor-pointer text-yellow-500"
          title="ویرایش"
          onClick={() => {
            setColorToEdit(rowData);
            setshowModal(true);
          }}
        >
          <FaEdit />
        </button>
  
        <button
          className="mx-1 cursor-pointer text-red-500"
          title="حذف"
          onClick={() => {
            handleDeleteProduct(rowData);
          }}
        >
          <MdDelete />
        </button>
      </>
    );
  };

export default Actions;
