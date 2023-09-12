# Tashkent Weather Forecast Dashboard

## Description

Weather is tough to consider while traveling, but it is critical. We are here to assist you in making more confident and well-informed decisions. The program uses the [OpenWeather API](https://openweathermap.org/api) to retrieve weather and forecast information, and it delivers up-to-date weather information and forecasts to help you anticipate and plan for your trip. 

Get the current weather and prediction for the following eight days.The UV Index will be accompanied with a color representing the index's severity.


## Content

* [Preview](#preview)
* [Code](#code)
* [Features](#features)
* [Technologies](#technologies)

## Preview

![image](https://github.com/KhasanovR/weather-forecast-dashboard/assets/22652133/4f9417e3-aa22-4185-bd3f-da73edcb94c7)


## Code

JavaScript

Hook to retrieve data from [OpenWeather API](https://openweathermap.org/api).

```Typescript
export const useWeather = (latitude: number, longitude: number) => {
    //
    const [oneCallData, setOneCallData] = useState<OneCallResponse>()

    useEffect(() => {
        //
        axios
            .get(`${OPEN_WEATHER_MAP_API_URL}/onecall?lat=41.2646&lon=69.2163&units=metric&appid=${OPEN_WEATHER_MAP_API_KEY}`)
            .then(response => {
                setOneCallData(response.data);
            });
    }, [latitude, longitude]);

    return {
        currentWeatherData: oneCallData?.current,
        hourlyForecastRecords: oneCallData?.hourly       || [],
        dailyForecastRecords: oneCallData?.daily || [],
    }
}
```

## Features

- The current weather conditions
- 48-hour forecast
- 8-day forecast


## Technologies

* [React](https://react.dev/reference/react)
* [Typescript](https://www.typescriptlang.org/docs/)
* [Axios](https://axios-http.com/docs/intro)
* [MUI](https://mui.com/material-ui)
