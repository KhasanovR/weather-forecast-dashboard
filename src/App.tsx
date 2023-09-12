import {Weather} from "./comp";
import {createTheme, ThemeProvider} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

export const WEATHER_API_URL = 'https://openweathermap.org/data/2.5';
export const WEATHER_API_KEY = '439d4b804bc8187953eb36d2a8c26a02';
export const WEATHER_ICON_URL = 'https://openweathermap.org/img/w';

function App() {
    //
    const darkTheme = createTheme({palette: {mode: 'dark'}});

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <div style={{padding: 100}}>
                    <Weather/>
                </div>
            </ThemeProvider>
        </>
    )
}

export default App
