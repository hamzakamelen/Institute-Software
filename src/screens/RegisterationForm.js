import MailIcon from '@mui/icons-material/Mail';
import SchoolIcon from '@mui/icons-material/School';
import LinkIcon from '@mui/icons-material/Link';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import HzForm from '../components/HzForm';

function RegisterationForm(){
    let textfield = [
        {
            name: "Institute Name",
            icon: <SchoolIcon />
        },
        {
            name: "Institute Short Name",
            icon: <SchoolIcon />
        }, {
            name: "Logo Image Link",
            icon: <LinkIcon />
        }, {
            name: "No of Campus",
            icon: <HolidayVillageIcon />
        }, {
            name: "Main Location",
            icon: <LocationOnIcon />
        }
        , {
            name: "Full Address",
            icon: <HomeIcon />
        }
        , {
            name: "Institute Email",
            icon: <MailIcon />
        }
        , {
            name: "Institute Contact",
            icon: <CallIcon />
        }
        , {
            name: "Owner Email",
            icon: <MailIcon />
        }
        , {
            name: "Owner Contact",
            icon: <CallIcon />
        }
    ]
    
    let dropdownitems = ["School", "College", "University", "Technical Institute"]
return(
 < HzForm labels = { textfield } title = "Institute Registeration" btntitle = "Submit"
    formlabel = "Type" dropdown = { dropdownitems } />
    )
} 
export default RegisterationForm;