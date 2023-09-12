import {Paper, Typography} from "@mui/material";
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import * as dayjs from "dayjs";
export const SunsetView = (
    {
        sunrise,
        sunset,
    }: {
        sunrise?: number;
        sunset?: number;
    }) => {
    //
    const sunriseDate = new Date(0);
    sunriseDate.setUTCSeconds(sunrise || 0);

    const sunsetDate = new Date(0);
    sunsetDate.setUTCSeconds(sunset || 0);

    return (
        <>
            <Paper variant={"outlined"} style={{
                width: '100%',
                height: '100%',
                padding: 20,
            }}>
                <Typography className={'flex'} style={{alignItems: 'center'}}>
                    <WbTwilightIcon/> SUNSET
                </Typography>
                sunrise: {sunrise ? dayjs(sunriseDate).format('H:ss') : '-'}
                <br/>
                sunset: {sunset ? dayjs(sunsetDate).format('H:ss') : '-'}
            </Paper>
        </>
    )
}