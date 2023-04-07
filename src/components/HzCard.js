import { Box, Typography } from "@mui/material";

function HzCard(prop) {
    const { title, FirstTitle, SecondTitle,ThirdTitle ,data,icon } = prop
    return (
        <>
            <Box component='div'>
                <Box className="p-3" marginTop={10} sx={{ boxShadow: "7" }} width={1200} height={100}  component='div'>
                    <Typography className="text-center"  variant="h3">{title}</Typography>
                    <Typography marginTop={-5}  className="text-end"  variant="h6">{icon}</Typography></Box>
                <br />
                <Box component='div'>
                    <Typography variant="h5">{FirstTitle}</Typography>
                    <Typography marginTop={-4} className="text-center" variant="h5">{SecondTitle}</Typography>
                    <Typography marginTop={-4} className="text-end" variant="h5">{ThirdTitle}</Typography>
                </Box>
                {data && Array.isArray(data) && data.length > 0 ? data.map((x, i) => {
                    return(
                    <Box marginTop={1} key={i} className="p-4" sx={{ boxShadow: "7" }} width={1200} height={100} component='div'>
                        <Typography className="mt-2" variant="h4">{x.name}</Typography>
                        <Typography className="text-center" marginTop={-5} variant="h4">{x.value}</Typography>
                        <Typography className="text-end" marginTop={-5} variant="h4">{x.values}</Typography>
                    </Box>)
                }) : null}
            </Box>
        </>
    )
}
export default HzCard;