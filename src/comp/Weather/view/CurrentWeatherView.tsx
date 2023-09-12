import {Current, Hourly} from "../state";
import {Stack, Typography} from "@mui/material";
import lodash from "lodash";

export const CurrentWeatherView = (
    {
        location,
        currentWeather,
        hourlyForecastRecords,
    }: {
        location: string,
        currentWeather?: Current;
        hourlyForecastRecords: Hourly[];
    }) => {
    //

    return (
        <>
            <Stack alignItems={'center'}>
                <Typography variant={"h5"}>{location}</Typography>
                <Typography variant={"h3"}>{currentWeather?.temp ? Math.round(currentWeather.temp) : '-'}&deg;</Typography>
                {currentWeather?.weather[0].description.split(' ').map(item => lodash.capitalize(item)).join(" ")}
                <Stack direction={"row"} justifyContent={'center'} spacing={1}>
                    <span>H: {Math.round(Math.max(...(hourlyForecastRecords.map(item => item.temp) || [])))}&deg;</span>
                    <span>L: {Math.round(Math.min(...(hourlyForecastRecords.map(item => item.temp) || [])))}&deg;</span>
                </Stack>
            </Stack>
        </>
    )
}