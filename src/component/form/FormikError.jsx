import React from 'react';

const FormikError = ({children}) => {
    return (
        <small className='block text-red-600 mt-2 text-center'>{children}</small>
    );
}

export default FormikError;
