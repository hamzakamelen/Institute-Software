import { Typography } from "@mui/material";

function ExamResults(){
    let tableheads =["Subject","Marks","Percentage"]
    let tablebody =[
        {
            name: "Calculus",
            marks: 25,
            perc: 80+"%"
        },
        {
            name: "English",
            marks: 29,
            perc: 98+"%"
        },
        {
            name: "Professional Practices in Computing",
            marks: 23,
            perc: 75+"%"
        },
        {
            name: "Pak Studies",
            marks: 19,
            perc: 50+"%"
        },
        {
            name: "Programming Fundamentals",
            marks: 30,
            perc: 100+"%"
        },
        {
            name: "Communicaton Skills",
            marks: 25,
            perc: 85+"%"
        }
    ];
    return(
        <>
     <Typography fontSize={50} marginTop={10}>Result</Typography>
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
                            <td>{x.marks}</td>
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
export default ExamResults;