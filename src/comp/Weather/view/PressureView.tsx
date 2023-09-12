import {Paper, Typography} from "@mui/material";
import ScaleIcon from '@mui/icons-material/Scale';
export const PressureView = (
    {
        pressure,
    }: {
        pressure?: number;
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
                    <ScaleIcon/> PRESSURE
                </Typography>
                {pressure || '-'} hPa
            </Paper>
        </>
    )
}