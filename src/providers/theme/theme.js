import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
export const lightTheme = createMuiTheme({
  palette: {
    primary: green,
    secondary: {
      main: '#2db287',
    },
  },
});

export const darkTheme = createMuiTheme({
    palette: {
      secondary: {
        main: '#E34',
      },
    },
  });