import {Paper, Typography} from "@mui/material";
import WaterIcon from '@mui/icons-material/Water';

export const HumidityView = (
    {
        humidity,
    }: {
        humidity?: number;
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
                    <WaterIcon/> HUMIDITY
                </Typography>
                {humidity || '-'}%
            </Paper>
        </>
    )
}