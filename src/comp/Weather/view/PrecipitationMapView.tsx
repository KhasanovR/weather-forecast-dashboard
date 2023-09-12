import {Paper, Typography} from "@mui/material";
import UmbrellaIcon from '@mui/icons-material/Umbrella';

export const PrecipitationMapView = () => {
    //
    return (
        <>
            <Paper variant={"outlined"} style={{
                width: '100%',
                height: '100%',
                padding: 20,
            }}>
                <Typography className={'flex'} style={{alignItems: 'center'}}>
                    <UmbrellaIcon style={{transform: "rotate(180deg)"}}/> PRECIPITATION MAP
                </Typography>
            </Paper>
        </>
    )
}