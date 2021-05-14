import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { Twitter, YouTube } from "@material-ui/icons";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
  Redirect
} from "react-router-dom";
import Link from '@material-ui/core/Link';
import About from "./About";
import Cooking from "./Cooking";
import Game from "./Game";
import Home from "./Home";
import LazyTwitter from "./LazyTwitter";
import Page from "./Page";
import Song from "./Song";
import './App.css';
import Grid from "@material-ui/core/Grid";

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
              {new Date().getDate() === 11 && new Date().getMonth() === 4 ?
                <Link href="/">メリうた🎉</Link>
                :
                <Link href="/">メリうた🐝</Link>
              }
            </Typography>
            <Tooltip title="お歌をもっと聴く！">
              <Button component={RouterLink} to="/song">🎵<br />うた</Button>
            </Tooltip>
            {/* <Button component={Link} to="/consideration">歌をもっと知る</Button> */}
            <Tooltip title="ゲーム配信を探す！">
              <Button component={RouterLink} to="/game">🎮<br />ゲーム</Button>
            </Tooltip>
            <Tooltip title="お料理配信やレシピをみる！">
              <Button component={RouterLink} to="/cooking">🍙<br />お料理</Button>
            </Tooltip>
            <Tooltip title="このサイトについて">
              <Button component={RouterLink} to="/about">ℹ️<br />このサイト</Button>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <main>
          <Switch>
            <Route path="/about">
              <Page title="このサイトについて">
                <About />
              </Page>
            </Route>
            {/* <Route path="/consideration">
            <Consideration />
          </Route> */}
            <Route path="/game">
              <Page title="ゲーム実況">
                <Game />
              </Page>
            </Route>
            <Route path="/cooking">
              <Page title="お料理配信・レシピ">
                <Cooking />
              </Page>
            </Route>
            <Redirect from="/song" to="/" />
            <Route path="/">
              <Page title="">
                <Song />
              </Page>
            </Route>
            {/* <Redirect from="/" to="/song" />
          <Route path="/">
            <Page>
              <Home />
            </Page>
          </Route> */}
          </Switch>
        </main>
        <Container maxWidth="lg" className="s-container">
          <Grid container spacing={4}>
            <Grid item key="calendar" xs={12} md={8}>
              <Typography component="h6" variant="h6">
                📅 ボイス・グッズ販売カレンダー
                </Typography>
              <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=YXQxbmdjamVtc3NiOGU1Y2pvMGE0czdrcTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%237CB342&amp;showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTabs=0" style={{ borderWidth: 0 }} width="100%" height="600" frameBorder="0" scrolling="no"></iframe>
            </Grid>
            <Grid item key="twitter" xs={12} md={4}>
              <Typography component="h6" variant="h6">
                🐝 メリッサ・キンレンカさん
                </Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="メリッサ・キンレンカ" src="https://yt3.ggpht.com/ytc/AAUvwnhLcbb-bFY6iOEKdAK73QSFz547jev3H4s4YcUV=s88-c-k-c0x00ffffff-no-rj" />
                  </ListItemAvatar>
                  <ListItemText primary="メリッサ・キンレンカ" secondary={
                    <span>
                      <Link color="primary" href="https://www.youtube.com/channel/UCwcyyxn6h9ex4sMXGtpQE_g"><YouTube style={{ verticalAlign: 'middle', display: 'inline-block' }} />YouTube</Link><br />
                      <Link color="primary" href="https://twitter.com/melissa_2434"><Twitter style={{ verticalAlign: 'middle', display: 'inline-block' }} />Twitter</Link>
                    </span>
                  } />
                </ListItem>
              </List>
              <LazyTwitter dataSource={{ sourceType: "profile", screenName: "melissa_2434" }} options={{ width: '320', height: '640' }} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  </Router>
)

export default App;