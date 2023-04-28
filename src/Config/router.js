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
import CourseForm from "../screens/Institute Dashboard/CourseForm";
import Profile from "../screens/Student Dashboard/Profile";
import AttendanceReport from "../screens/Student Dashboard/AttendanceReport";
import ExamResults from "../screens/Student Dashboard/ExamResults";
import UploadResult from "../screens/Institute Dashboard/UploadResult";
import Payment from "../screens/Student Dashboard/Payment";
import Err404 from "../screens/PublicRoutes/Err404";
function Routers() {
    return (
      <BrowserRouter>
        <Routes>
          {/* //Main Dashboard// */}
          <Route path="MainDashboard/*" element={<MainDashboard />} />
          <Route path="RegisteredInstitute.js" element={<RegisteredInstitute />} />
          <Route path="InstituteForm" element={<InstituteForm />} />

          {/* // Student Dashboard// */}
          <Route path="StudentDashboard/*" element={<StudentDashboard />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="AttendanceReport" element={<AttendanceReport />} />
          <Route path="ExamResults" element={<ExamResults />} />
          <Route path="Payment" element={<Payment />} />
          

          {/* // Institute Dashboard// */}
          <Route path="InstituteDashboard/*" element={<InstituteDashboard />} />
          <Route path="Courses" element={<Courses />} />
          <Route path="CourseForm" element={<CourseForm />} />
          <Route path="EnrolledStudents" element={<EnrolledStudents />} />
          <Route path="Quiz" element={<Quiz />} />
          <Route path="RegisterationControl" element={<RegisterationControl />} />
          <Route path="Institutedashboard/UploadResult" element={<UploadResult />} />

          {/* //Public Route //  */}
          <Route path="RegisterationForm" element={<RegisterationForm />} />
          <Route path="Result" element={<Result />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Err404 />} />
        </Routes>
      </BrowserRouter>
    );
}
export default Routers;
