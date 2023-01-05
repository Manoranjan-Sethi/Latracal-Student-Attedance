import React, { useState, useEffect } from "react";
import "./Attendance.css";

function Attendance() {
  const [allData, setAllData] = useState();

  useEffect(() => {
    fetch("https://filthy-ray-leather-jacket.cyclic.app/students")
      .then((res) => res.json())
      .then((data) => setAllData(data))
      .catch((er) => {
        console.log(er);
      });
  }, []);
  return (
    <div>
      <h3>Total number of students present are {allData?.length}</h3>
      <div className="dataTable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll</th>
              <th>Date</th>
              <th>Check In</th>
              <th>Check Out</th>
            </tr>
          </thead>
          <tbody>
            {allData?.map((res) => (
              <tr key={res.id}>
                <td>{res.name}</td>
                <td>{res.roll}</td>
                <td>{res.date}</td>
                <td>{res.checkIn}</td>
                <td>{res.checkOut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Attendance;
