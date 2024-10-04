import React from "react";

const PaginationTable = ({ data, dataInfo, additinalField }) => {
  return (
    <div>
      <table className="w-full table-auto">
        <thead>
          <tr className="font-bold text-right">
            {dataInfo.map((i) => (
              <th key={i.field} className="p-3 border-b">
                {i.title}
              </th>
            ))}
            {additinalField ? ( <th>{additinalField.title}</th> ) : null}
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr className="hover:bg-[#5d88b8] text-sm">
              {dataInfo.map((i) => (
                <td key={i.field + "_" + d.id} className="p-3 border-b">
                  {d[i.field]}
                </td>
              ))}
            {additinalField ? (<th>{additinalField.elements(d.id)}</th> ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaginationTable;
