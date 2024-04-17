import React from 'react';
import { useEffect, useState } from 'react'

/* Test items
let items = [];

for (let i = 1; i < 5; i++) {
  items.push({
    key: i,
    fname: 'FirstName ' + i,
    lname: 'LastName ' + i,
    program: 'UG',
    email: 'Email ' + i,
  });
}
*/

const StudentList = (props) => {


    const [items, setItems] = useState([]);
  useEffect(() => {
    const isItemKey = props.detallsEstudiant.key;
    if (isItemKey) {
      setItems((prevItems) => [...prevItems, props.detallsEstudiant]);
      props.setDetallsEstudiant({});
    }
  }, [props]);

  return (
    <table className="m-3 table-auto rounded-lg">
      <thead className="bg-blue-500 p-2 px-4 py-2 font-bold text-white">
        <tr>
          <th className="rounded-l-lg px-4 py-2">Nom</th>
          <th className="px-4 py-2">Cognoms</th>
          <th className="px-4 py-2">Estudis</th>
          <th className="rounded-r-lg px-4 py-2">Correu</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.key}>
            <td className="border px-4 py-2">{item.fname}</td>
            <td className="border px-4 py-2">{item.lname}</td>
            <td className="border px-4 py-2">{item.programa}</td>
            <td className="border px-4 py-2">{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;