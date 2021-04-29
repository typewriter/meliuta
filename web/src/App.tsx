import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import Consideration from "./Consideration";
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
            <Button component={Link} to="/">歌を聴く</Button>
            {/*
            <Button component={Link} to="/consideration">考察や考え方にふれる</Button>
            */}
            <Button component={Link} to="/about">このサイトについて</Button>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/consideration">
            <Consideration />
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