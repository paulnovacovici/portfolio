import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import AppBar from './components/AppBar';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Routes from './components/Routes';
import {BrowserRouter as Router} from "react-router-dom";

// eslint-disable-next-line
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        TheLyricist
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#212121',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#fafafa',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar />
        <Routes />
        {/* <Copyright /> */}
      </Router>
    </ThemeProvider>
  );
}
