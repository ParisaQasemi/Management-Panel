import { FastField } from 'formik';
import React from 'react';

const Switch = ({ name, label }) => {
    return (
      <div className="flex justify-center items-center mb-4">
        <label className="block text-white text-sm font-bold mx-2">{label}</label>
        <FastField name={name}>
          {({ field }) => (
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox" className="toggle toggle-sm toggle-info" defaultChecked  {...field} />
            </label>
          )}
        </FastField>
      </div>
    );
  };

export default Switch;





  


