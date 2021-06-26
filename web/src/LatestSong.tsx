import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { FiberNew, LibraryMusic } from "@material-ui/icons";
import React from "react";
import LazyYouTubePlayer from "./LazyYouTubePlayer";

const latestSongs: {
    title: string;
    embedUrl: string;
}[] = [
        {
            title: "絶え間なく藍色",
            embedUrl: "https://www.youtube.com/embed/RpUUcL9zctY",
        },
        {
            title: "エンヴィーベイビー",
            embedUrl: "https://www.youtube.com/embed/xz0iriPFNcA",
        },
        {
            title: "celluloid",
            embedUrl: "https://www.youtube.com/embed/8CUTuw-xJgc",
        },
        {
            title: "メビウス",
            embedUrl: "https://www.youtube.com/embed/h2YDbhEURZA",
        },
        {
            title: "レッド・パージ！！！",
            embedUrl: "https://www.youtube.com/embed/3JU6I12H5WU",
        },
        {
            title: "KING",
            embedUrl: "https://www.youtube.com/embed/X5VEzYA1C-8",
        },
        {
            title: "就寝御礼",
            embedUrl: "https://www.youtube.com/embed/StA3_Nc5dzM",
        },
    ];

const originalSongs: {
    title: string;
    embedUrl: string;
}[] = [
        {
            title: "<strong>胎生</strong><br />うたさっきょくさくしみっくす：メリッサ・キンレンカ<br />絵：ととりか<br />編曲：友人１２３４５６７８９０",
            embedUrl: "https://www.youtube.com/embed/dlVWaAQZPag",
        },
        {
            title: "<strong>haze</strong><br/ >歌・作詞・作曲・mix：メリッサ・キンレンカ<br />イラスト：ohuton<br />編曲：友人ABCDEFG",
            embedUrl: "https://www.youtube.com/embed/hhXeNNxovSE",
        },
    ];

const LatestSong = () => {
    return (
        <>
            <Container maxWidth="lg" className="s-container">
                <Typography component="h6" variant="h6">
                    <FiberNew /> 最新の歌動画
                </Typography>
                <Grid container spacing={4}>
                    {latestSongs.slice(0, 1).map((song) => (
                        <Grid item key={song.title} xs={12}>
                            <Card>
                                <CardContent>
                                    {song.title}
                                    <LazyYouTubePlayer title={song.title} url={song.embedUrl} />
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Container maxWidth="lg" className="s-container">
                <Typography component="h6" variant="h6">
                    <LibraryMusic /> オリジナル曲
                </Typography>
                <Grid container spacing={4}>
                    {originalSongs.slice(0, 2).map((song) => (
                        <Grid item key={song.title} xs={12} md={6}>
                            <Card>
                                <CardContent>
                                    <span dangerouslySetInnerHTML={{ __html: song.title }} />
                                    <LazyYouTubePlayer title={song.title} url={song.embedUrl} />
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default LatestSong;