import React from "react";
import "./StudentForm.css";
import { initialValues } from "../../App";

function StudentForm({ data, setData }) {
  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://filthy-ray-leather-jacket.cyclic.app/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      alert("Form Submitted Sucessfully");
      setData(initialValues);
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
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div>
          <label>Student's Roll Number</label>
          <input
            type="text"
            name="roll"
            placeholder="Roll of the Student"
            required
            value={data.roll}
            onChange={(e) => {
              const regex = /^[0-9\b]+$/; //only numbers are allowed
              if (!(e.target.value === "" || regex.test(e.target.value)))
                return;
              setData({ ...data, roll: e.target.value });
            }}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            name="date"
            required
            value={data.date}
            onChange={(e) => setData({ ...data, date: e.target.value })}
          />
        </div>
        <div>
          <label>Check In</label>
          <input
            type="time"
            name="checkIn"
            required
            value={data.checkIn}
            onChange={(e) => setData({ ...data, checkIn: e.target.value })}
          />
        </div>
        <div>
          <label>Check Out</label>
          <input
            type="time"
            name="checkOut"
            required
            value={data.checkOut}
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
