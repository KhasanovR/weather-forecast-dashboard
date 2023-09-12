import {Hourly} from "../state";
import {Paper, Stack} from "@mui/material";
import {OPEN_WEATHER_MAP_ICON_URL} from "../../../App.tsx";
import * as dayjs from "dayjs";

export const HourlyForecastView = (
    {
        hourlyForecastRecords,
    }: {
        hourlyForecastRecords: Hourly[];
    }) => {
    //
    return (
        <>
            <Paper variant={"outlined"} style={{
                width: '100%',
                height: '100%',
            }}>
                <Stack direction={"row"} spacing={5} style={{overflow: 'auto'}} padding={2}>
                    {
                        hourlyForecastRecords.map((record, index) => {
                            const d = new Date(0);
                            d.setUTCSeconds(record.dt);
                            return (
                                <Stack key={index}>
                                    <span>{dayjs(d).format("H")}</span>
                                    <img style={{width: 30}}
                                         src={`${OPEN_WEATHER_MAP_ICON_URL}/${record.weather[0].icon}.png`}/>
                                    <span>{Math.round(record.temp)}&deg;</span>
                                </Stack>
                            );
                        })
                    }
                </Stack>
            </Paper>
        </>
    )
}