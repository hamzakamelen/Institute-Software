import { Box, Button, Typography } from "@mui/material";
import './ComponentsCss/HzTable.css';

function HzTable(prop){

    const {data, title,btnTitle,btnonClick , tableheads} = prop

    
    return(
      <>
      <div>
        <div>
        <Typography variant="h2">{title}</Typography>
        </div>
        <Box>
          <Button
            sx={{ 
              width: "15%",
              fontSize: "19px",
              fontWeight: "bold",
              marginLeft: "80%",
            }}
            variant="contained"
            size="medium"
            onClick={btnonClick}
          >
            {btnTitle}
          </Button>
        </Box>
        <table cellSpacing={0} cellPadding={0} className="table table-stripped ">
            <thead>
                <tr >
                    {tableheads.map((x,i)=>{
                        return(
                    <th key={i}>{x}</th>
                    )    
                    })}
                </tr>
            </thead>
            <tbody >
                
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