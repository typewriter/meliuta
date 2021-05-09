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
                        お料理配信やレシピ・お料理写真のツイートを集めました。お腹が空いてきます。
                    </Typography>
                </Paper>
            </Container>

            <Container maxWidth="lg" className="s-container">
                <Typography><YouTube style={{ verticalAlign: 'middle', display: 'inline-block' }} /> 配信</Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                <LazyYouTubePlayer title="寝れない夜のスープづくり～白菜スープの巻き～【メリッサ・キンレンカ/にじさんじ】" url="https://www.youtube.com/embed/LNNIRBNZRko" />
                                <LazyTweet url="https://twitter.com/melissa_2434/status/1318917059942649856?ref_src=twsrc%5Etfw" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
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
                                <LazyTweet url="https://twitter.com/melissa_2434/status/1383362907476353029?ref_src=twsrc%5Etfw" />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper variant="outlined">
                            <Box m={1}>
                                「ナムル的な何か」
                                <LazyTweet url="https://twitter.com/melissa_2434/status/1368851021120696324?ref_src=twsrc%5Etfw" />
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
                </Grid>
            </Container>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </main >
    );
};

export default Cooking;