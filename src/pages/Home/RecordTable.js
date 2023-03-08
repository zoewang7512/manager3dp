import React from "react";
import { Table } from "reactstrap";

const RecordTable = ({ data }) => {
  return (
    <div>
      <Table dark>
        <thead>
          <tr>
            <th>日期</th>
            <th>機身號碼</th>
            <th>備註</th>
            <th>人員</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.serialNum}</td>
              <td>{item.notes}</td>
              <td>{item.applicant}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default RecordTable;
