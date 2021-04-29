import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { LibraryMusic, Report, Twitter } from '@material-ui/icons';
import React from 'react';
import LazyYouTubePlayer from './LazyYouTubePlayer';

const Consideration = () => {
    return (
        <main>
            <Container maxWidth="lg" className="s-container">
                <Typography component="h6" variant="h6">考察や考え方にふれる</Typography>
                <Paper variant="outlined" className="d-margin">
                    <Typography variant="body2">
                        （これは個人的な理解ですが）あくまで「当時の」「限られた時間で語られた」内容です。十分ご留意の上でご覧ください。
                    </Typography>
                </Paper>
            </Container>

            {/*
            <Container maxWidth="lg" className="s-container">
                <Typography component="h6" variant="h6">
                    <Twitter /> ツイート
                </Typography>
                <Grid container spacing={4}>
                    <Grid item key="haze" xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <span><strong>haze (オリジナル曲、 2020/04/01 投稿)</strong></span>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            */}
            <Container maxWidth="lg" className="s-container">
                <Typography component="h6" variant="h6">
                    <LibraryMusic /> メンバー限定動画での考察
                </Typography>
                <Typography variant="body2">
                    注: メンバーでないと再生できません。また、内容は外で触れないようにお願いします。
                    <Box m={4} fontStyle="italic" display="block">
                        <blockquote className="twitter-tweet"><p lang="ja" dir="ltr">あしたのド深夜多分1時〜2時にメン限でオリジナル曲の裏話だったり考察をおはなししたいなと〜〜話した内容のネタバレ厳禁でたのむ……！そして作者の僕が正しい解釈だ！！って動画のコメント欄とかで言わないでほしいし強要しないでくれたらラブアンドピース✌️</p>&mdash; メリッサ・キンレンカ (@melissa_2434) <a href="https://twitter.com/melissa_2434/status/1245696053250101249?ref_src=twsrc%5Etfw">April 2, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                    </Box>
                </Typography>
                <Grid container spacing={4}>
                    <Grid item key="haze" xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <span><strong>haze (オリジナル曲、 2020/04/01 投稿)</strong></span>
                                <LazyYouTubePlayer title="haze 考察とか" url="https://www.youtube.com/embed/gmptQOnEOx8" />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item key="taisei" xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <span><strong>胎生 (オリジナル曲、 2020/05/02 投稿)</strong></span>
                                <LazyYouTubePlayer title="nannka　胎生の話とか" url="https://www.youtube.com/embed/ww3PGpwS_Ss" />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item key="taisei" xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <span><strong>就寝御礼 (カバー曲、 2020/09/20 投稿)</strong></span>
                                <LazyYouTubePlayer title="しゅうしんこうさつかも" url="https://www.youtube.com/embed/OKyDzByGfeM" />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </main >
    );
};

export default Consideration;