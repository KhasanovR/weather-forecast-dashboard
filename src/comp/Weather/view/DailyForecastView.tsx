import {Daily} from "../state";
import {Grid, Paper, Typography} from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import * as dayjs from "dayjs";
import {OPEN_WEATHER_MAP_ICON_URL} from "../../../App.tsx";

export const DailyForecastView = (
    {
        dailyForecastRecords,
    }: {
        dailyForecastRecords: Daily[];
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
                    <CalendarMonthIcon/> DAILY FORECAST
                </Typography>
                <Grid container marginTop={2} style={{height: '90%', overflow: 'auto'}}>
                    {
                        dailyForecastRecords.map(record => {
                            const d = new Date(0);
                            d.setUTCSeconds(record.dt);
                            return (
                                <>
                                    <Grid item xs={3}>
                                        {dayjs(d).format('ddd')}
                                    </Grid>
                                    <Grid item xs={3}>
                                        <img style={{width: 30}}
                                             src={`${OPEN_WEATHER_MAP_ICON_URL}/${record.weather[0].icon}.png`}/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <span>L: {record.temp.min}&deg;</span>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <span>H: {record.temp.max}&deg;</span>
                                    </Grid>
                                </>
                            );
                        })
                    }
                </Grid>
            </Paper>
        </>
    )
}