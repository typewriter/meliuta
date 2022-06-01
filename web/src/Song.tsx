import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Twitter, YouTube } from "@material-ui/icons";
import Alert from "@material-ui/lab/Alert";
import React, { useEffect, useState } from "react";
import LatestSong from "./LatestSong";
import SongTable from "./SongTable";

const songUrl = "/songs.tsv";

export interface SongItem {
    url: string;
    title: string;
    publishedAt: Date;
    thumbnailUrl: string;
    songType: string;
    originalSongTitle: string;
    originalArtist: string;
    originalCreator: string;
    tag: string;
};

const Song = () => {
    const [songs, setSongs] = useState<SongItem[]>([]);

    useEffect(() => {
        fetch(songUrl)
            .then((res) => {
                return res.text();
            }).then((body) => {
                const lines = body.split("\n");
                const songs = lines.slice(2, lines.length).map(line => {
                    const elements = line.split("\t");
                    return {
                        url: elements[0],
                        title: elements[1],
                        publishedAt: new Date(elements[2]),
                        thumbnailUrl: elements[3],
                        songType: elements[5],
                        originalSongTitle: elements[6],
                        originalArtist: elements[7],
                        originalCreator: elements[8],
                        tag: elements[9],
                    };
                }).sort((a, b) => {
                    // const songType = (songMap.get(a.songType) || 9) - (songMap.get(b.songType) || 9);
                    // if (songType !== 0) return songType;

                    const publishedAt = b.publishedAt.getTime() - a.publishedAt.getTime();
                    return publishedAt;
                });

                setSongs(songs);
            });
    }, []);

    return (
        <main>
            <Container maxWidth="lg" className="s-container">
                <Paper variant="outlined" className="d-margin">
                    <Typography variant="body2">
                        <Link color="primary" href="https://www.nijisanji.jp/">にじさんじ</Link>を2022年5月末に卒業されたバーチャルライバー、<Link color="primary" href="https://www.nijisanji.jp/members/melissa-kinrenka">メリッサ・キンレンカ</Link>さんの歌がもっと聴きたくて個人で作った非公式のお歌まとめファンサイトです。<br />
                    </Typography>
                    <Alert severity="info">
                        本サイトは2022年6月はじめごろにクローズする予定です。これまでありがとうございました。
                    </Alert>
                </Paper>
                <Typography component="h6" variant="h6">
                    🎵 うた
                </Typography>
                {/* <Paper variant="outlined" className="d-margin">
                    <Typography variant="body2">
                        オリジナル曲・カバー曲のほか、配信内で歌われたものやツイートも掲載しています。<br />
                        （歌枠は残らないことも多いので、基本的には一期一会を楽しみにしています）
                    </Typography>
                </Paper> */}
                <Typography variant="body2">
                    <YouTube style={{ verticalAlign: 'middle', display: 'inline-block' }} /> をクリックすると、 YouTube の動画がその位置から再生されます。なお、メンバー限定動画はメンバーでないと再生できません。<br />
                    <Twitter style={{ verticalAlign: 'middle', display: 'inline-block' }} /> はツイートが開きます。
                </Typography>
                <SongTable songs={songs} />
            </Container>
            <LatestSong />
        </main>
    );
};

export default Song;