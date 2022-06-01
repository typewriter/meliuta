import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Link from '@material-ui/core/Link';
import Page from "./Page";
import './App.css';
import { Closed } from "./Closed";
import React from 'react';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#919b58',
      main: '#626d2d',
      dark: '#364201',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffffa8',
      main: '#d3f377',
      dark: '#a0c047',
      contrastText: '#353d1d',
    },
  },
});

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <CssBaseline />
          <AppBar position="relative" className="c-bar" color="secondary">
            <Toolbar>
              <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
                {new Date().getDate() === 11 && new Date().getMonth() === 4 ?
                  <Link href="/">メリうた🎉</Link>
                  :
                  <Link href="/">メリうた🐝</Link>}
              </Typography>
            </Toolbar>
          </AppBar>
          <main>
            <Switch>
              <Route exact path="/">
                <Page title="クローズしました">
                  <Closed />
                </Page>
              </Route>
              <Route path="/">
                <Redirect to="/" />
              </Route>
            </Switch>
          </main>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;