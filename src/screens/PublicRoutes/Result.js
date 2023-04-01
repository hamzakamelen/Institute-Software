import MarkunreadIcon from '@mui/icons-material/Markunread';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import HzForm from '../../components/HzForm';
function Result(){
    let textfield=[
    {
        name: "Roll #",
        icon: <Grid3x3Icon />

    }

]
let dropdownitems =[{
    name:"Course", 
 value: ["Artificial Intelligence", "Cyber Security", "Comp Science"]}]
    return(
        <>
              <HzForm
    labels={textfield}
    MainHeading="Result"
    btntitle="Search"
    dropdownitem={dropdownitems}
  />
        
        </>
    )
}
export default Result