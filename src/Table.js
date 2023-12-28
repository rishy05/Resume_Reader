// Table.js
import React from 'react';

const Table = ({ data }) => {
  const columns = Object.keys(data);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {columns.map((column) => (
              <td key={column}>{data[column]}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
