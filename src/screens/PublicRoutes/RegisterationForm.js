import HzForm from "../../components/HzForm";
import MailIcon from "@mui/icons-material/Mail";
import PasswordIcon from "@mui/icons-material/Password";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CallIcon from "@mui/icons-material/Call";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import BadgeIcon from "@mui/icons-material/Badge";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import FlagIcon from "@mui/icons-material/Flag";
import HomeIcon from "@mui/icons-material/Home";
import CakeIcon from "@mui/icons-material/Cake";

function RegisterationForm() {
  let textfield = [
    {
      name: "Student Name",
      icon: <BadgeIcon />,
    },
    {
      name: "Father Name",
      icon: <BadgeIcon />,
    },
    {
      name: "Contact",
      icon: <CallIcon />,
    },
    {
      name: "CNIC",
      icon: <BadgeIcon />,
    },
    {
      name: "Last qualification",
      icon: <LocalLibraryIcon />,
    },
    {
      name: "Institute",
      icon: <HolidayVillageIcon />,
    },
    {
      name: "Section",
      icon: <HolidayVillageIcon />,
    },
    {
      name: "Email",
      icon: <MailIcon />,
    },
    {
      name: "Password",
      icon: <PasswordIcon />,
    },
    {
      name: "City",
      icon: <ApartmentIcon />,
    },
    {
      name: "Country",
      icon: <FlagIcon />,
    },
    {
      name: "Date of birth",
      icon: <CakeIcon />,
    },
    {
      name: "Address",
      icon: <HomeIcon />,
    },
  ];
  let radioitems=[
    {
      name: "Gender",
      value:["Male","Female","Other"]
    }
  ]
  let dropdownitems = [
    {
      name: "Qualification",
      value: ["Intermediate", "Matric", "Undergraduate", "Primary"],
    },
    {
      name: "Courses",
      value: [
        "Web and Mobile App Development",
        "Graphics",
        "Blockchain",
        "CyberSecurity",
      ],
    },
    {
      name: "Section",
      value: ["A1", "A2", "A3"],
    },
    {
        name:"Country",
        value:['Pakistan','India','China']
    },
    {
      name: "City",
      value: ["Karachi", "Lahore", "Islamabad", "Peshawar", "Nawabshah"],
    },
  ];
  return (
    <>

      <HzForm
      radioitem ={radioitems}
        dropdownitem={dropdownitems}
        labels={textfield}
        MainHeading="Student Registeration"
        btntitle="Submit"
      />
    </>
  );
}
export default RegisterationForm;
