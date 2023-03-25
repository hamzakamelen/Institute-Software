import { Typography } from "@mui/material";

function HzTable(prop){

    const {data, title , tableheads} = prop

    
    return(
      <>
      <div>
        <div>
        <Typography variant="h2">{title}</Typography>
        </div>
        <table border={1}>
            <thead>
                <tr>
                    {tableheads.map((x,i)=>{
                        return(
                    <th key={i}>{x}</th>
                    )    
                    })}
                </tr>
            </thead>
            <tbody>
                
                {data.map((x,i)=>{
                    return(
                        <tr key={i}>
                        <td width="250px" align="center" ><img src={x.logo} /></td>
                        <td width="250px" align="center" >{x.name}</td>
                        <td width="250px" align="center" >{x.campus}</td>
                        <td width="250px" align="center" >{x.Status}</td>
                        </tr>
                        )
                })}
            </tbody>

          </table>
      </div>
    </>

    )
}
export default HzTable;