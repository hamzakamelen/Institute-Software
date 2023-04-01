import { BrowserRouter, Route, Routes } from "react-router-dom";
import InstituteDashboard from "../screens/Institute Dashboard/Institutedashboard";
import Login from "../screens/PublicRoutes/Login";
import InstituteForm from "../screens/Main Dashboard/InstituteForm";
import MainDashboard from "../screens/Main Dashboard/Maindashboard";
import RegisteredInstitute from "../screens/Main Dashboard/RegisteredInstitute";
import Result from "../screens/PublicRoutes/Result";
import StudentDashboard from "../screens/Student Dashboard/Studentdashboard";
import RegisterationForm from "../screens/PublicRoutes/RegisterationForm";
import Quiz from "../screens/Institute Dashboard/Quiz";
import RegisterationControl from "../screens/Institute Dashboard/RegisterationControl";
import EnrolledStudents from "../screens/Institute Dashboard/EnrolledStudents";
import Courses from "../screens/Institute Dashboard/Courses";
function Routers() {
    return (
      <BrowserRouter>
        <Routes>
          {/* //Main Dashboard// */}
          <Route path="/" element={<MainDashboard />} />
          <Route path="RegisteredInstitute.js" element={<RegisteredInstitute />} />
          <Route path="InstituteForm" element={<InstituteForm />} />
          {/* // Student Dashboard// */}
          <Route path="StudentDashboard" element={<StudentDashboard />} />
          {/* // Institute Dashboard// */}
          <Route path="InstituteDashboard" element={<InstituteDashboard />} />
          <Route path="Courses" element={<Courses />} />
          <Route path="EnrolledStudents" element={<EnrolledStudents />} />
          <Route path="Quiz" element={<Quiz />} />
          <Route path="RegisterationControl" element={<RegisterationControl />} />
          {/* //Public Route //  */}
          <Route path="RegisterationForm" element={<RegisterationForm />} />
          <Route path="Result" element={<Result />} />
          <Route path="Login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    );
}
export default Routers; 
