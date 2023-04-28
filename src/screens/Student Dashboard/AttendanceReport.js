import { Typography } from "@mui/material";

function AttendanceReport(){
    let tableheads =["Student","Classes","Percentage"]
    let tablebody =[
        {
            name: "Hamza Kamelen",
            attendance: 10,
            perc: 80+"%"
        }
    ];
    return(
        <>
     <Typography fontSize={50} marginTop={10}>Attendance</Typography>
     <table className="table border-dark EnrolledStudentstable table-striped border-1">
            <thead>
            <tr>
                {tableheads && tableheads.length>0 && Array.isArray(tableheads)? tableheads.map((x,i)=>{
                    return(
                     <th className="fs-4" key={i}>{x}</th>)
                })
                :null}
            </tr>
            </thead>
            <tbody>
                {tablebody && Array.isArray(tablebody) && tablebody.length>0 ? tablebody.map((x,i)=>{
                    return(
                        <>
                        <tr key={i}>
                            <td>{x.name}</td>
                            <td>{x.attendance}</td>
                            <td>{x.perc}</td>
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
export default AttendanceReport;