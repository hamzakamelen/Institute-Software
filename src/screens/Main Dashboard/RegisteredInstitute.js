import { useNavigate } from "react-router-dom";
import HzTable from "../../components/HzTable";

function RegisteredInstitute(){
    //// Main Dashboard
let Instituteheads = ["Logo", "Institute Name", "No of Campus", "Status"]
let InstituteAllData = [
    {
        logo: "https://upload.wikimedia.org/wikipedia/en/8/8b/NEDUET_logo.svg",
        name: "NED University of Engineering and Technology",
        campus: 5,
        Status: "InActive"
    },
    {
        logo: "https://upload.wikimedia.org/wikipedia/en/8/8b/NEDUET_logo.svg",
        name: "NED University of Engineering and Technology",
        campus: 5,
        Status: "Active"
    },
    {
        logo: "https://upload.wikimedia.org/wikipedia/en/8/8b/NEDUET_logo.svg",
        name: "NED University of Engineering and Technology",
        campus: 5,
        Status: "InActive"
    },
    {
        logo: "https://upload.wikimedia.org/wikipedia/en/8/8b/NEDUET_logo.svg",
        name: "NED University of Engineering and Technology",
        campus: 5,
        Status: "Active"
    },
    {
        logo: "https://upload.wikimedia.org/wikipedia/en/8/8b/NEDUET_logo.svg",
        name: "NED University of Engineering and Technology",
        campus: 5,
        Status: "InActive"
    }
]
let navigate = useNavigate();
//// Main Dashboard
    return(
        <>
        <HzTable
         btnTitle = "Add"
          data={InstituteAllData}
          tableheads={Instituteheads}
          title="Registered Institutes"
          btnonClick={() => navigate('/InstituteForm')}
        />
        </>
    )
}
export default RegisteredInstitute;