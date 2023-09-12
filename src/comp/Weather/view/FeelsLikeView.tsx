import {Paper, Typography} from "@mui/material";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
export const FeelsLikeView = (
    {
        feelsLike,
    }: {
        feelsLike?: number;
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
                    <DeviceThermostatIcon/> FEELS LIKE
                </Typography>
                {feelsLike ? Math.round(feelsLike) : '-'}&deg;
            </Paper>
        </>
    )
}