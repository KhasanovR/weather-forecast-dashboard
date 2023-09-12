import axios from "axios";
import {useEffect, useState} from "react";
import {WEATHER_API_KEY, WEATHER_API_URL} from "../../../App";

export interface OneCallResponse {
    lat: number
    lon: number
    timezone: string
    timezone_offset: number
    current: Current
    hourly: Hourly[]
    daily: Daily[]
}

export interface Current {
    dt: number
    sunrise: number
    sunset: number
    temp: number
    feels_like: number
    pressure: number
    humidity: number
    dew_point: number
    clouds: number
    uvi: number
    visibility: number
    wind_speed: number
    wind_gust?: number
    wind_deg: number
    rain?: Rain
    snow?: Snow
    weather: Weather[]
}

export interface Rain {
    "1h": number
    "3h"?: number
}

export interface Snow {
    "1h": number
    "3h"?: number
}

export interface Weather {
    id: number
    main: string
    description: string
    icon: string
}

export interface Hourly {
    dt: number
    temp: number
    feels_like: number
    pressure: number
    humidity: number
    dew_point: number
    uvi: number
    clouds: number
    visibility: number
    wind_speed: number
    wind_gust?: number
    wind_deg: number
    pop: number
    rain?: Rain
    snow?: Snow
    weather: Weather[]
}

export interface Daily {
    dt: number
    sunrise: number
    sunset: number
    moonrise: number
    moonset: number
    moon_phase: number
    summary: string
    temp: Temp
    feels_like: FeelsLike
    pressure: number
    humidity: number
    dew_point: number
    wind_speed: number
    wind_gust?: number
    wind_deg: number
    clouds: number
    uvi: number
    pop: number
    rain?: number
    snow?: number
    weather: Weather[]
}

export interface Temp {
    morn: number
    day: number
    eve: number
    night: number
    min: number
    max: number
}

export interface FeelsLike {
    morn: number
    day: number
    eve: number
    night: number
}

export interface Coord {
    lat: number
    lon: number
}

export const useWeather = (coord: Coord) => {
    //
    const [oneCallData, setOneCallData] = useState<OneCallResponse>()

    useEffect(() => {
        //
        const url = `${WEATHER_API_URL}/onecall?lat=${coord.lat}&lon=${coord.lon}&units=metric&appid=${WEATHER_API_KEY}`;
        axios.get(url).then(response => setOneCallData(response.data));
    }, [coord]);

    return {
        currentWeatherData: oneCallData?.current,
        hourlyForecastRecords: oneCallData?.hourly || [],
        dailyForecastRecords: oneCallData?.daily || [],
    }
}