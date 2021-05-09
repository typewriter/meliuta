import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import Cooking from "./Cooking";
import Game from "./Game";
import Home from "./Home";

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

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <AppBar position="relative" className="c-bar" color="secondary">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
              メリうた🐝
            </Typography>
            <Tooltip title="お歌">
              <Button component={Link} to="/">🎵<br />お歌</Button>
            </Tooltip>
            {/* <Button component={Link} to="/consideration">歌をもっと知る</Button> */}
            <Tooltip title="ゲーム配信">
              <Button component={Link} to="/game">🎮<br />ゲーム</Button>
            </Tooltip>
            <Tooltip title="お料理配信・レシピ">
              <Button component={Link} to="/cooking">🍙<br />お料理</Button>
            </Tooltip>
            <Tooltip title="このサイトについて">
              <Button component={Link} to="/about">ℹ️<br />このサイト</Button>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          {/* <Route path="/consideration">
            <Consideration />
          </Route> */}
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/cooking">
            <Cooking />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  </Router>
)

export default App;