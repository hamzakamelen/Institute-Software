import { Box, Button, Typography } from "@mui/material";
import './ComponentsCss/HzTable.css';

function HzTable(prop){

    const {data, title,btnTitle,btnonClick , tableheads} = prop

    
    return(
      <>
      <div>
        <div>
        <Typography variant="h3">{title}</Typography>
        </div>
        {btnTitle && btnonClick?<Box>
           <Button
            sx={{ 
              width: "15%",
              fontSize: "19px",
              fontWeight: "bold",
              marginLeft: "80%",
              marginTop:"-5%"
            }}
            variant="outlined"
            size="medium"
            onClick={btnonClick}
          >
            {btnTitle}
          </Button>
        </Box>:null}
        <table  cellSpacing={0} cellPadding={0} className="table border-1 table-stripped mt-2">
            <thead>
                <tr >
                    {tableheads && Array.isArray(tableheads) && tableheads.length > 0 ? tableheads.map((x,i)=>{
                        return(
                    <th className="text-center" key={i}>{x}</th>
                    )    
                    }):null}
                </tr>
            </thead>
            <tbody >
                
                {data && Array.isArray(data) && data.length > 0 ?data.map((x,i)=>{
                    return(
                        <tr key={i}>
                       {x.logo ? <td width="250px" align="center" ><img src={x.logo} /></td>:null}
                        <td width="250px" align="center" >{x.name}</td>
                        <td width="250px" align="center" >{x.campus}</td>
                        <td width="250px" align="center" >{x.Status}</td>
                        </tr>
                        )
                }):null}
            </tbody>

          </table>
      </div>
    </>

    )
}
export default HzTable;