import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { LibraryMusic, MusicNote, Twitter, YouTube } from '@material-ui/icons';
import React from 'react';
import LazyTweet from './LazyTweet';
import LazyYouTubePlayer from './LazyYouTubePlayer';

const Cooking = () => {
    return (
        <main>
            <Container maxWidth="lg" className="s-container">
                <Typography component="h6" variant="h6">🍙 お料理配信・レシピ</Typography>
                <Paper variant="outlined" className="d-margin">
                    <Typography variant="body2">
                        お料理配信やレシピ・お料理写真のツイートを集めました。お腹が空きます。
                    </Typography>
                </Paper>
            </Container>

            <Container maxWidth="lg" className="s-container">
                <Typography><YouTube style={{ verticalAlign: 'middle', display: 'inline-block' }} /> 配信</Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                2022/02/13 配信
                                <LazyYouTubePlayer title="めりぃ食堂～ちーずのもちもちとゆかいな仲間たち～【メリッサ・キンレンカ/にじさんじ】" url="https://www.youtube.com/embed/WFF_8hyLllA" />
                                <Grid container spacing={4}>
                                    <Grid item xs={12} md={6}>
                                        <LazyTweet url="https://twitter.com/melissa_2434/status/1492749910910783492" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <LazyTweet url="https://twitter.com/melissa_2434/status/1492751148733775874" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <LazyTweet url="https://twitter.com/melissa_2434/status/1492766410589696001" />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                2022/01/18 配信
                                <LazyYouTubePlayer title="めりぃ食堂～べんとうがたべたい～【メリッサ・キンレンカ/にじさんじ】" url="https://www.youtube.com/embed/eoNbnlG1hOA" />
                                <Grid container spacing={4}>
                                    <Grid item xs={12} md={6}>
                                        <LazyTweet url="https://twitter.com/melissa_2434/status/1483392645535653889" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <LazyTweet url="https://twitter.com/melissa_2434/status/1483401178578702338" />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                2021/12/02 配信
                                <LazyYouTubePlayer title="めりぃ食堂～ぽとふ～【メリッサ・キンレンカ/にじさんじ】" url="https://www.youtube.com/embed/NzIHxH_U_Lk" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                2021/11/07 配信
                                <LazyYouTubePlayer title="めりぃ食堂～番外編～【メリッサ・キンレンカ/にじさんじ】" url="https://www.youtube.com/embed/postiKypBMA" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                2021/09/20 配信
                                <LazyYouTubePlayer title="めりぃ食堂～手羽元のすっぱ煮編～【メリッサ・キンレンカ/にじさんじ】" url="https://www.youtube.com/embed/mqWBKYYz9EM" />
                                <LazyTweet url="https://twitter.com/melissa_2434/status/1439933362819371011" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                2021/08/22 配信
                                <LazyYouTubePlayer title="めりぃ食堂～ZYA-MANNPOTETONO～【メリッサ・キンレンカ/にじさんじ】" url="https://www.youtube.com/embed/lhnTPEg6CZE" />
                                <Grid container spacing={4}>
                                    <Grid item xs={12} md={6}>
                                        <LazyTweet url="https://twitter.com/melissa_2434/status/1429108323425558532" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <LazyTweet url="https://twitter.com/melissa_2434/status/1429110211545944067" />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                2021/08/14 配信
                                <LazyYouTubePlayer title="朝のめりぃ食堂～焼き網を買いまして編～【メリッサ・キンレンカ/にじさんじ】" url="https://www.youtube.com/embed/0n6Lj1E8o_Q" />
                                <LazyTweet url="https://twitter.com/melissa_2434/status/1426309055585288195" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                2021/08/10 配信
                                <LazyYouTubePlayer title="【雑談】しんやらでぃお【メリッサ・キンレンカ/にじさんじ】" url="https://www.youtube.com/embed/OxpQtTxlcns" />
                                <LazyTweet url="https://twitter.com/melissa_2434/status/1424794231529361408" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                2021/07/28 配信
                                <LazyYouTubePlayer title="めりぃ食堂～カンカンカレー編～※レシピ概要欄にて【メリッサ・キンレンカ/にじさんじ】昼のキッチン【メリッサ・キンレンカ/にじさんじ】" url="https://www.youtube.com/embed/B53t7jEBQiI" />
                                <Grid container spacing={4}>
                                    <Grid item xs={12} md={6}>
                                        <LazyTweet url="https://twitter.com/melissa_2434/status/1420231946165096455" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <LazyTweet url="https://twitter.com/melissa_2434/status/1416342703785140224?ref_src=twsrc%5Etfw" />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                2020/11/07 配信
                                <LazyYouTubePlayer title="昼のキッチン【メリッサ・キンレンカ/にじさんじ】" url="https://www.youtube.com/embed/sd8ypVUS4Pg" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                2020/10/21 配信
                                <LazyYouTubePlayer title="寝れない夜のスープづくり～白菜スープの巻き～【メリッサ・キンレンカ/にじさんじ】" url="https://www.youtube.com/embed/LNNIRBNZRko" />
                                <LazyTweet url="https://twitter.com/melissa_2434/status/1318917059942649856?ref_src=twsrc%5Etfw" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                2020/10/14 配信
                                <LazyYouTubePlayer title="眠れない夜のスープづくり【メリッサ・キンレンカ/にじさんじ】" url="https://www.youtube.com/embed/fHzfpTRag7E" />
                                <Grid container spacing={4}>
                                    <Grid item xs={12} md={6}>
                                        <LazyTweet url="https://twitter.com/melissa_2434/status/1316056420375166976?ref_src=twsrc%5Etfw" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <LazyTweet url="https://twitter.com/melissa_2434/status/1316060878534393856?ref_src=twsrc%5Etfw" />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="lg" className="s-container">
                <Typography><Twitter style={{ verticalAlign: 'middle', display: 'inline-block' }} /> ツイート</Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                <LazyTweet url="https://twitter.com/melissa_2434/status/1452603072442560517" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                <LazyTweet url="https://twitter.com/melissa_2434/status/1450426051725643779" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                <LazyTweet url="https://twitter.com/melissa_2434/status/1433770879071113219" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                <LazyTweet url="https://twitter.com/melissa_2434/status/1430500851999641603" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                <LazyTweet url="https://twitter.com/melissa_2434/status/1429298144534097930" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                <LazyTweet url="https://twitter.com/melissa_2434/status/1415312551735271424?ref_src=twsrc%5Etfw" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                <LazyTweet url="https://twitter.com/melissa_2434/status/1408003001223061507?ref_src=twsrc%5Etfw" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                <LazyTweet url="https://twitter.com/melissa_2434/status/1383362907476353029?ref_src=twsrc%5Etfw" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                「レンチン豆腐の中華濁りスープ」
                                <LazyTweet url="https://twitter.com/melissa_2434/status/1354814431771856905?ref_src=twsrc%5Etfw" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                <LazyTweet url="https://twitter.com/melissa_2434/status/1327108533070876673?ref_src=twsrc%5Etfw" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                「謎の創作料理」
                                <LazyTweet url="https://twitter.com/melissa_2434/status/1323775829248143360?ref_src=twsrc%5Etfw" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                「鶏肉と愉快なバタポン炒め」
                                <LazyTweet url="https://twitter.com/melissa_2434/status/1318406673564749824?ref_src=twsrc%5Etfw" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                「メリッサのアスパラとニンニクの芽の肉まき」
                                <LazyTweet url="https://twitter.com/melissa_2434/status/1306919041882234880?ref_src=twsrc%5Etfw" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                <LazyTweet url="https://twitter.com/melissa_2434/status/1286459945701871617?ref_src=twsrc%5Etfw" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                「万能肉団子」
                                <LazyTweet url="https://twitter.com/melissa_2434/status/1298583419949969410?ref_src=twsrc%5Etfw" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                「万能肉団子」 活用レシピ
                                <LazyTweet url="https://twitter.com/melissa_2434/status/1303909115958157312?ref_src=twsrc%5Etfw" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                「食堂めりぃ」（メリッサ・キンレンカさんのモーメント）
                                <a className="twitter-moment" href="https://twitter.com/i/moments/1416613409286615042?ref_src=twsrc%5Etfw">食堂めりぃ</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </main >
    );
};

export default Cooking;