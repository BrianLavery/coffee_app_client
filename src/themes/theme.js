import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
	palette: {
		primary: {
			main: '#0971f1',
			darker: '#053e85',
		},
		neutral: {
			main: '#64748B',
			contrastText: '#fff',
		},
		darkgrey: {
			main: '#333333',
		},
		lightgreyborder: {
			main: '#EEEEEE',
		},
		redtheme: {
			main: '#FF0000',
		},
	},
});

theme = responsiveFontSizes(theme);

export default theme;
