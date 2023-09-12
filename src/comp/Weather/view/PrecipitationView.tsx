import {Paper, Typography} from "@mui/material";
import WaterDropIcon from '@mui/icons-material/WaterDrop';

export const PrecipitationView = (
    {
        precipitation,
    }: {
        precipitation?: number;
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
                    <WaterDropIcon/> PRECIPITATION
                </Typography>
                {precipitation || '-'} mm
            </Paper>
        </>
    )
}