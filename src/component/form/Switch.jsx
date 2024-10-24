import { FastField } from 'formik';
import React from 'react';

const Switch = ({name, label}) => {
    return (
        <div className='flex justify-center items-center h-14 mb-12'>
            <label className='block text-white text-sm font-bold mx-2'> {label} </label>
            <FastField type='checkbox' name={name} />
        </div>
    );
}

export default Switch;
