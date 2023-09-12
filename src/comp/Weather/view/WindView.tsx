import {Paper, Typography} from "@mui/material";
import AirIcon from '@mui/icons-material/Air';
export const WindView = (
    {
        wind_speed,
        wind_deg,
        // wind_gust,
    }: {
        wind_speed?: number
        wind_deg?: number
        wind_gust?: number
    }) => {
    //
    return (
        <>
            <Paper variant={"outlined"} style={{
                width: '100%',
                height: '100%',
                padding: 20,
            }}>
                <Typography className={'flex'} style={{alignItems: 'center'}}>
                    <AirIcon/> WIND
                </Typography>
                {wind_speed || '-'} km/h
                <br/>
                {wind_deg || '-'} deg
            </Paper>
        </>
    )
}