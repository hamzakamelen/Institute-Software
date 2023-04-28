import { Typography } from "@mui/material";
function Profile(){
    let tablebody =[
        {
            name: "Name",
            student: "Hamza Kamelen",
        },{
            name: "Department",
            student: "Artificial Intelligence",
        },{
            name: "Roll Number",
            student: "22F-BSAI-09",
        },{
            name: "Section",
            student: "A1",
        },{
            name: "Email",
            student: "hhh...@gmail.com",
        },
    ];
   return(
        <>        
        <Typography fontSize={50} marginTop={10}>Profile</Typography>
        <table className="table border-dark EnrolledStudentstable table-striped border-1">
            <tbody>
                {tablebody && Array.isArray(tablebody) && tablebody.length>0 ? tablebody.map((x,i)=>{
                    return(
                        <>
                        <tr key={i}>
                            <td>{x.name}</td>
                            <td>{x.student}</td>
                        </tr>
                        </>
                    )
                }
                ):null}
            </tbody>
        </table>
        </>
    )
}
export default Profile;