import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { FiberNew, LibraryMusic, MusicNote, Twitter, YouTube } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import './App.css';
import SongTable from './SongTable';
import LazyYouTubePlayer from './LazyYouTubePlayer';
import LazyTwitter from './LazyTwitter';
import Button from '@material-ui/core/Button';
import {
    Link as RouterLink
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import LatestSong from './LatestSong';

// const songMap: Map<string, number> = new Map([
//   ["動画", 1],
//   ["他チャンネル", 2],
//   ["歌枠", 3],
//   ["配信", 4],
//   ["Twitter", 5],
//   ["メンバー限定", 6],
// ]);

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '24px 4px',
        minHeight: '160px',
        verticalAlign: 'center',
    },
}));

const Home = () => {
    const classes = useStyles();

    return (
        <main>
            <Container maxWidth="lg" className="s-container">
                <Paper variant="outlined" className="d-margin">
                    <Typography variant="body2">
                        <Link color="primary" href="https://nijisanji.ichikara.co.jp/">にじさんじ</Link>所属のバーチャルライバー、<Link color="primary" href="https://nijisanji.ichikara.co.jp/member/melissa-kinrenka/">メリッサ・キンレンカ</Link>さんの歌がもっと聴きたくて個人で作った非公式のお歌まとめファンサイトです。
                  </Typography>
                </Paper>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <Typography variant="h5" align="center">
                                <Link href="/song">🎵<br />うた</Link>
                            </Typography>
                            <Typography align="center">
                                <Link href="/song">配信、ツイート、動画 などなど…！</Link>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <Typography variant="h5" align="center">
                                <Link href="/game">🎮<br />ゲーム</Link>
                            </Typography>
                            <Typography align="center">
                                <Link href="/game">ゲーム配信を探す！</Link>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <Typography variant="h5" align="center">
                                <Link href="/cooking">🍙<br />お料理</Link>
                            </Typography>
                            <Typography align="center">
                                <Link href="/cooking">配信やレシピをみる！</Link>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            {new Date().getDate() === 11 && new Date().getMonth() === 4 ?
                <Container maxWidth="lg" className="s-container">
                    <Grid container justify="center">
                        <Grid item xs={12} sm={6}>
                            <Card>
                                <CardMedia component="img" image="/46604848122_578ec22436_w.jpg" />
                                <CardContent>
                                    <Typography variant="h6" align="center">
                                        Happy birthday, Melissa Kinrenka! 🎉
                        </Typography>
                                    <Typography variant="body2" align="center">
                                        5月11日はメリッサ・キンレンカさんのお誕生日です！
                        </Typography>
                                    <Typography variant="caption">
                                        <small>photo: <Link href="https://flic.kr/p/2e1j2Eb">Bennilover</Link></small>
                                    </Typography>

                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
                :
                <>
                </>}
            <LatestSong />
        </main>
    );
};

export default Home;