import React from 'react';

const ShowInData = ({rowData}) => {
    return (
        <span className={rowData.show_in_menu ? "text-green-600" : "text-red-600"}>
          {rowData.show_in_menu ? "هست" : "نیست"}
        </span>
      );
}

export default ShowInData;
