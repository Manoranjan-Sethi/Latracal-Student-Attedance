import React, { useState } from "react";
import "./StudentForm.css";

const initialValues = {
  name: "",
  roll: "",
  date: "",
  checkIn: "",
  checkOut: "",
};

function StudentForm() {
  // const [name, setName] = useState("");
  // const [roll, setRoll] = useState("");
  // const [date, setDate] = useState("");
  // const [checkIn, setCheckIn] = useState("");
  // const [checkOut, setCheckOut] = useState("");
  const [data, setData] = useState(initialValues);
  // const [allData, setAllData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    // const data = { name, roll, date, checkIn, checkOut };

    fetch("https://filthy-ray-leather-jacket.cyclic.app/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      alert("Form Submitted Sucessfully");
      // setData(null);
    });
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Student's Form</h1>
        <div>
          <label>Student's Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name of the Student"
            required
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div>
          <label>Student's Roll Number</label>
          <input
            type="number"
            name="roll"
            placeholder="Roll of the Student"
            required
            onChange={(e) => setData({ ...data, roll: e.target.value })}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            name="date"
            required
            onChange={(e) => setData({ ...data, date: e.target.value })}
          />
        </div>
        <div>
          <label>Check In</label>
          <input
            type="time"
            name="checkIn"
            required
            onChange={(e) => setData({ ...data, checkIn: e.target.value })}
          />
        </div>
        <div>
          <label>Check Out</label>
          <input
            type="time"
            name="checkOut"
            required
            onChange={(e) => setData({ ...data, checkOut: e.target.value })}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
