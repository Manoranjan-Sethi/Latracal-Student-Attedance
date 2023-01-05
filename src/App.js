import "./App.css";
import { Route, Routes } from "react-router-dom";
import StudentForm from "./components/Form/StudentForm";
import Navbar from "./components/Navbar/Navbar";
import Attendance from "./components/Attendance/Attendance";
import Home from "./components/Home/Home";
import { useState } from "react";

export const initialValues = {
  name: "",
  roll: "",
  date: "",
  checkIn: "",
  checkOut: "",
};
function App() {
  const [data, setData] = useState(initialValues);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="form"
          element={<StudentForm data={data} setData={setData} />}
        />
        <Route path="attendance" element={<Attendance />} />
      </Routes>
    </div>
  );
}

export default App;
