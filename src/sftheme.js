import { createTheme } from '@mui/material/styles';

export default function sftheme() {
    return createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#2892ea',
            },
            secondary: {
                main: '#c0362c',
            },
        },
        typography: {
            body1: {
                fontFamily: "'Montserrat','Roboto','Helvetica','sans-serif'",
                fontWeight: 'bold'
            }
        }
    });
}