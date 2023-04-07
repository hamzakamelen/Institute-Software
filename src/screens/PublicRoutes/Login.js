import HzForm from "../../components/HzForm"
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MarkunreadIcon from '@mui/icons-material/Markunread';
function Login(){
    let textfield=[{
        name: "UserName or Email",
        icon:  <MarkunreadIcon />
    },
{
    name: "Password",
    icon: <LockOpenIcon />
}
]
const menu = [
    {
      name: "Profile",
      route: "Profile",
    },
    {
      name: "Attendance Report",
      route: "AttendanceReport",
    },
    {
      name: "Results",
      route: "ExamResults",
    },
  ];
let dropdownitems =[{
    name:"Type", 
 value: ["Student", "Admin", "Teacher", "Institute"]

}]
    return(
        <>
         <HzForm
    labels={textfield}
    MainHeading="Login"
    btntitle="Login"
    dropdownitem={dropdownitems}
  />
        
        </>
    )
}
export default Login