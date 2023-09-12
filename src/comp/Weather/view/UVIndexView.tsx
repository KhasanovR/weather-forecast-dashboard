import {Paper, Typography} from "@mui/material";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export const UVIndexView = (
    {
        uvIndex,
    }: {
        uvIndex?: number;
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
                    <WbSunnyIcon/> UV INDEX
                </Typography>
                {uvIndex || '-'}
            </Paper>
        </>
    )
}