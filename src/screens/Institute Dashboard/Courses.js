import HzCard from "../../components/HzCard"
import AddIcon from '@mui/icons-material/Add';

function Courses() {
    let CourseData=[
        {
        name: "Artificial Intelligence",
        value: "15 Months",
        values: "21000"
    },  {
        name: "Cyber Security",
        value: "15 Months",
        values: "21000"
    },  {
        name: "IOT",
        value: "15 Months",
        values: "21000"
    },  {
        name: "App Development",
        value: "15 Months",
        values: "21000"
    },  {
        name: "Ethical hacking",
        value: "15 Months",
        values: "21000"
    },  {
        name: "Web Development",
        value: "15 Months",
        values: "21000"
    },  {
        name: "Graphic designing",
        value: "15 Months",
        values: "21000"
    },  {
        name: "Artificial Intelligence",
        value: "15 Months",
        values: "21000"
    }
]
    return (
        <>
        
        <HzCard icon={<AddIcon fontSize="large" />} title="Courses"ThirdTitle="Fees"  FirstTitle="Course" SecondTitle="Duration" data={CourseData}  />
        </>
    )
}
export default Courses