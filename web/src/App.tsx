import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ArrowBack, FiberNew, LibraryMusic, MusicNote, Twitter, YouTube } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import './App.css';
import SongTable from './SongTable';
import LazyYouTubePlayer from './LazyYouTubePlayer';
import LazyTwitter from './LazyTwitter';

const songUrl = "/songs.tsv";

const latestSongs: {
  title: string;
  embedUrl: string;
}[] = [
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

export interface Song {
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

// const songMap: Map<string, number> = new Map([
//   ["動画", 1],
//   ["他チャンネル", 2],
//   ["歌枠", 3],
//   ["配信", 4],
//   ["Twitter", 5],
//   ["メンバー限定", 6],
// ]);

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
  const [songs, setSongs] = useState<Song[]>([]);
  const [showingAbout, showAbout] = useState(false);

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
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <AppBar position="relative" className="c-bar" color="secondary">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
              <span onClick={() => showAbout(false)}>メリうた🐝</span>
            </Typography>
            <Button color="inherit" onClick={() => showAbout(true)}>About</Button>
          </Toolbar>
        </AppBar>
        {
          showingAbout ?
            <main>
              <Container maxWidth="lg" className="s-container">
                <Breadcrumbs className="ud-padding">
                  <Link color="inherit" href="#" onClick={() => showAbout(false)}>メリうた🐝</Link>
                  <Typography color="textPrimary">About</Typography>
                </Breadcrumbs>
                <Box lineHeight={1.7}>
                  <Typography>このサイトについて</Typography>
                  <ul>
                    <li>
                      <Link color="primary" href="https://nijisanji.ichikara.co.jp/">にじさんじ</Link>所属のバーチャルライバー、<Link color="primary" href="https://nijisanji.ichikara.co.jp/member/melissa-kinrenka/">メリッサ・キンレンカ</Link>さんの歌がもっと聴きたくて個人で作った非公式のお歌まとめサイトです。<br />
                  （アーカイブが残らない配信もちょくちょくあるので、基本的には一期一会を楽しみにしています）
                    </li>
                    <li>
                      メリッサ・キンレンカさんをもっと知る、そのきっかけになれば幸いです。
                    </li>
                    <li>
                      参考：<Link color="primary" href="https://levi-archives.site/">レヴィ・エリファ アーカイブス</Link>
                    </li>
                  </ul>
                  <Typography>おことわり</Typography>
                  <ul>
                    <li>情報には誤りや抜けが含まれるかもしれません。</li>
                    <li>サムネイルの利用などは<Link color="primary" href="https://event.nijisanji.app/guidelines/">いちから 二次創作ガイドライン</Link>に準拠しています。</li>
                    <li>メンバー限定動画の情報は、メンバー以外でも閲覧できる内容に基づいて記載しています。</li>
                    <li>アーカイブが削除された場合は、確認次第このサイトからも削除することがあります。</li>
                    <li>アクセス分析のために Google Analytics を利用しています。 Cookie を使用したり、アクセスしたページを Google に送信することがあります。</li>
                  </ul>
                  <Typography>連絡先</Typography>
                  <ul>
                    <li>
                      開発・運営：たいぷらいたー (Twitter: <Link color="primary" href="https://twitter.com/no_clock">@no_clock</Link>, Mail: <Link color="primary" href="mailto:typewriter.noclock@gmail.com">typewriter.noclock@gmail.com</Link>)
                    </li>
                    <li>
                      いちらんの追加・更新・削除にご協力いただける方は、<Link color="primary" href="https://forms.gle/ofLZ7LhzRQnkMzM58">いちらんの更新リクエスト</Link>にお寄せいただけますと幸いです。
                    </li>
                  </ul>
                  <Link color="primary" href="#" onClick={() => showAbout(false)}><ArrowBack style={{ verticalAlign: 'middle', display: 'inline-block' }} /> もどる</Link>
                </Box>
              </Container>
            </main> :
            <main>
              <Container maxWidth="lg" className="s-container">
                <Paper variant="outlined" className="d-margin">
                  <Typography variant="body2">
                    <Link color="primary" href="https://nijisanji.ichikara.co.jp/">にじさんじ</Link>所属のバーチャルライバー、<Link color="primary" href="https://nijisanji.ichikara.co.jp/member/melissa-kinrenka/">メリッサ・キンレンカ</Link>さんの歌がもっと聴きたくて個人で作った非公式のお歌まとめサイトです。<br />
                （アーカイブが残らない配信もちょくちょくあるので、基本的には一期一会を楽しみにしています）
                  </Typography>
                </Paper>
                <Typography component="h6" variant="h6">
                  <MusicNote /> いちらん
                </Typography>
                <Typography variant="body2">
                  <YouTube style={{ verticalAlign: 'middle', display: 'inline-block' }} /> をクリックすると、 YouTube の動画がその位置から再生されます。なお、メンバー限定動画はメンバーでないと再生できません。<br />
                  <Twitter style={{ verticalAlign: 'middle', display: 'inline-block' }} /> はツイートが開きます。
                </Typography>
                <SongTable songs={songs} />
              </Container>
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
              <Container maxWidth="lg" className="s-container">
                <Typography component="h6" variant="h6">
                  メリッサ・キンレンカさん
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
              </Container>
            </main>
        }
      </div>
    </ThemeProvider>
  );
};

export default App;
