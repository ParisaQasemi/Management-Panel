import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Actions = ({rowData, handleDeleteRole}) => {
    const navigate = useNavigate();
  
      return (
          <>
            <button
              className="mx-1 cursor-pointer text-yellow-500"
              title="ویرایش نقش "
              onClick={() => navigate('add-role', {state:{roleToEdit:rowData}})}
            >
              <FaEdit />
            </button>
      
            <button
              className="mx-1 cursor-pointer text-red-500"
              title="حذف نقش "
              onClick={()=>handleDeleteRole(rowData)}
              >
              <MdDelete />
            </button>
          </>
        );
  }
  
export default Actions;
