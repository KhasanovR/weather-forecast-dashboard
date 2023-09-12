import {Paper, Typography} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';

export const VisibilityView = (
    {
        visibility,
    }: {
        visibility?: number;
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
                    <VisibilityIcon/> VISIBILITY
                </Typography>
                {visibility || '-'} km
            </Paper>
        </>
    )
}