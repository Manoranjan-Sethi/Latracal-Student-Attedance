import "./App.css";
import { Route, Routes } from "react-router-dom";
import StudentForm from "./components/Form/StudentForm";
import Navbar from "./components/Navbar/Navbar";
import Attendance from "./components/Attendance/Attendance";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="form" element={<StudentForm />} />
        <Route path="attendance" element={<Attendance />} />
      </Routes>
    </div>
  );
}

export default App;
