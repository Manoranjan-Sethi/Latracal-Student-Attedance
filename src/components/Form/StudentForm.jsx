import React, { useState } from "react";
import "./StudentForm.css";

function StudentForm() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [date, setDate] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const data = { name, roll, date, checkIn, checkOut };
  }

  return (
    <div>
      <h1>Students Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Student's Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name of the Student"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Student's Roll Number</label>
          <input
            type="number"
            name="roll"
            placeholder="Roll of the Student"
            required
            onChange={(e) => setRoll(e.target.value)}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            name="date"
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>Check In</label>
          <input
            type="time"
            name="checkIn"
            required
            onChange={(e) => setCheckIn(e.target.value)}
          />
          <label>Check Out</label>
          <input
            type="time"
            name="checkOut"
            required
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
      </form>
      <button>Submit</button>
    </div>
  );
}

export default StudentForm;
