import { Button, FormControl, FormControlLabel,
   FormLabel, InputAdornment, InputLabel,
    MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";


function HzForm(prop) {

  const { labels,radioitem, MainHeading, btntitle, dropdownitem } = prop;
  return (
    <>
      <Typography sx={{ marginLeft: "10%", marginTop: "2%", }} variant="h3">{MainHeading}</Typography>
      <br />
      {labels.map((x, i) => {
        return (
          <>
            <br />
            <TextField
              key={i}
              label={x.name}
              sx={{ marginLeft: "10%", width: "40%", marginTop: "13px" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment key={i} position="start">
                    {x.icon}
                  </InputAdornment>
                ),
              }}
            />{" "}
            <br />
          </>
        );
      })}
      {/* {radioitem.map((x,i)=>{
        return(
          <>
      <RadioGroup key={i} sx={{ marginLeft: "10%", width: "40%", marginTop: "15px" }}
       name="use-radio-group" defaultValue={x.value[0]}>
        <Typography>{x.name}</Typography>
        {x.value.map((a,b)=>{
          return(
            <>
            <FormControlLabel key={b} value={a} label={a} control={<Radio />} />
            </>
          )
        })

        }
  
</RadioGroup>
</>
)})} */}

      {dropdownitem.map((x, i) => {
        return (<>
        <br />
          <FormControl key={i} sx={{ marginLeft: "10%", width: "40%", marginTop: "10px" }}>
            <InputLabel id="demo-simple-select-label">
              {x.name}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label={x.name}
            >
              {x.value.map((a, b) => {
                return (
                  <MenuItem key={b} value={a}>
                    {a}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </>
        )
      })}

      <Box>
        <Button
          sx={{
            marginTop: "2%",
            marginBottom: "2%",
            width: "15%",
            fontSize: "19px",
            fontWeight: "bold",
            marginLeft: "20%",
          }}
          variant="contained"
          size="medium"
        >
          {btntitle}
        </Button>
      </Box>
    </>
  );
}
export default HzForm;