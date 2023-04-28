import { Typography } from "@mui/material"

function EnrolledStudents(){
    let tableheads =["Student Name","Course","Fees"]
    let tablebody =[
        {
            name: "Hamza Kamelen",
            course: "Artificial Intelligence",
            fees: 2500
        },
        {
            name: "Hamza",
            course: "Cyber Security",
            fees: 2500
        },
        {
            name: "Talha Kamelen",
            course: "IOT",
            fees: 2500
        },
        {
            name: "Asad",
            course: "Cyber Security",
            fees: 2500
        },
        {
            name: "Wajahat",
            course: "App Development",
            fees: 2500
        },
        {
            name: "Moiz",
            course: "Web Development",
            fees: 2500
        },
        {
            name: "Muzammil",
            course: "IOT",
            fees: 2500
        },
        {
            name: "Yasir",
            course: "Artificial Intelligence",
            fees: 2500
        },
        {
            name: "Rayyan",
            course: "Cyber Security",
            fees: 2500
        },
        {
            name: "Hamza Ahmed",
            course: "Artificial Intelligence",
            fees: 2500
        },
        {
            name: "Muhammad Kamelen",
            course: "App Development",
            fees: 2500
        },
        {
            name: "Talha",
            course: "IOT",
            fees: 2500
        },
        {
            name: "Ahmed",
            course: "Artificial Intelligence",
            fees: 2500
        },
        {
            name: "Adnan",
            course: "Cyber Security",
            fees: 2500
        }
    ]
    return(
        <>
        <Typography fontSize={50} marginTop={10}>Students</Typography>
        <table  className="table border-dark EnrolledStudentstable table-striped border-1">
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
                            <td>{x.course}</td>
                            <td>{x.fees}</td>

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
export default EnrolledStudents