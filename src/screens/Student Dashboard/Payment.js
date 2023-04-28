import { Typography } from '@mui/material'
import React from 'react'

const Payment = () => {
    let tableheads =["Transaction ID","Semester","Paid Amount"]
    let tablebody =[
        {
            ID: "00123",
            Semester: "1st",
            Amount:"73000"
        },
        {
            ID: "00125",
            Semester: "2nd",
            Amount:"73000"
        },
        {
            ID: "0012",
            Semester: "3rd",
            Amount:"73000"
        },
    ];
  return (
    <>
    <Typography fontSize={50} marginTop={10}>Payment</Typography>
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
                            <td>{x.ID}</td>
                            <td>{x.Semester}</td>
                            <td>{x.Amount}</td>

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

export default Payment