import {useWeather} from "./state";
import {useEffect, useState} from "react";
import {
    CurrentWeatherView,
    DailyForecastView,
    FeelsLikeView,
    HourlyForecastView,
    HumidityView,
    PrecipitationMapView,
    PrecipitationView,
    PressureView,
    SunsetView,
    UVIndexView,
    VisibilityView,
    WindView
} from "./view";
import {Grid} from "@mui/material";

const WeatherContainer = () => {
    //
    const [lat, setLat] = useState<number>(41.2646);
    const [long, setLong] = useState<number>(69.2163);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });
    }, [lat, long]);

    const {
        currentWeatherData,
        hourlyForecastRecords,
        dailyForecastRecords,
    } = useWeather(lat, long);

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <CurrentWeatherView
                        location={"Tashkent"}
                        currentWeather={currentWeatherData}
                        hourlyForecastRecords={hourlyForecastRecords}/>
                </Grid>
                <Grid item xs={8}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} style={{height: '15vh'}}>
                            <HourlyForecastView hourlyForecastRecords={hourlyForecastRecords}/>
                        </Grid>
                        <Grid item xs={6} style={{height: '60vh'}}>
                            <DailyForecastView dailyForecastRecords={dailyForecastRecords}/>
                        </Grid>
                        <Grid item xs={6} style={{height: '60vh'}}>
                            <Grid container spacing={1}>
                                <Grid item xs={6} style={{height: '20vh'}}>
                                    <UVIndexView uvIndex={currentWeatherData?.uvi}/>
                                </Grid>
                                <Grid item xs={6} style={{height: '20vh'}}>
                                    <SunsetView sunrise={currentWeatherData?.sunrise}
                                                sunset={currentWeatherData?.sunset}/>
                                </Grid>
                                <Grid item xs={6} style={{height: '20vh'}}>
                                    <WindView
                                        wind_speed={currentWeatherData?.wind_speed}
                                        wind_deg={currentWeatherData?.wind_deg}
                                        wind_gust={currentWeatherData?.wind_gust}
                                    />
                                </Grid>
                                <Grid item xs={6} style={{height: '20vh'}}>
                                    <PrecipitationView
                                        precipitation={currentWeatherData?.rain?.["1h"] || currentWeatherData?.snow?.["1h"]}/>
                                </Grid>
                                <Grid item xs={6} style={{height: '20vh'}}>
                                    <FeelsLikeView feelsLike={currentWeatherData?.feels_like}/>
                                </Grid>
                                <Grid item xs={6} style={{height: '20vh'}}>
                                    <HumidityView humidity={currentWeatherData?.humidity}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} style={{height: '55vh'}}>
                            <PrecipitationMapView/>
                        </Grid>
                        <Grid item xs={6} style={{height: '20vh'}}>
                            <VisibilityView visibility={currentWeatherData?.visibility}/>
                        </Grid>
                        <Grid item xs={6} style={{height: '20vh'}}>
                            <PressureView pressure={currentWeatherData?.pressure}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
};

export default WeatherContainer;