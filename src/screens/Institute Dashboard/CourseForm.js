import SchoolIcon from '@mui/icons-material/School';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import PaidIcon from '@mui/icons-material/Paid';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import HzForm from '../../components/HzForm';
function CourseForm(){
    let CourseForm=[
        {
            name:"Course Name",
            icon: <SchoolIcon />
        },
        {
            name:"Duration",
            icon:<AvTimerIcon />
        },
        {
            name:"Fee",
            icon: <PaidIcon />
        },
        {
            name:"Teacher",
            icon: <EmojiPeopleIcon />
        }
    ]
    return(
        <>
        <HzForm
    labels={CourseForm}
    MainHeading="Course Form"
    btntitle="Submit"
  />
        </>
    )
}
export default CourseForm;