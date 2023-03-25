import { Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
function HzForm(prop) {

const {labels,title,dropdown,formlabel,btntitle} = prop
    return (
        <>
            <Typography variant="h3">{title}</Typography>
            <br />
            {labels.map((x,i)=>{
                return(
                    <>
                    <br />
                    <TextField key={i} label={x.name} sx={{ width: "40%", marginTop: "13px" }} 
                    InputProps={{
                        startAdornment: (
                          <InputAdornment key={i} position="start">
                            {x.icon}
                          </InputAdornment>
                        ),
                      }}
                    /> <br />
                </>
                )
            })}
             <FormControl sx={{ width: "40%", marginTop: "15px" }}>
                <InputLabel id="demo-simple-select-label">{formlabel}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label={formlabel}
                >
                    {dropdown.map((x,i)=>{
                       return(
                           <MenuItem key={i} value={x}>{x}</MenuItem>
                       )
                    })}
                </Select>
            </FormControl>
            <Box>
      <Button
      sx={{
        marginTop:'2%',
        width:'15%',
        fontSize:"19px",
        fontWeight:'bold',
        marginLeft: "10%",
      }}
      variant="contained" size="medium" >{btntitle}</Button>
      </Box>


        </>
    )
}
export default HzForm;