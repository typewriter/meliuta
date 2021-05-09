import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { LibraryMusic, MusicNote, Twitter, YouTube } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import GameSearcher from './GameSearcher';
import LazyTweet from './LazyTweet';
import LazyYouTubePlayer from './LazyYouTubePlayer';

export interface GameVideo {
    videoId: string;
    title: string;
    publishedAt: Date;
    thumbnailUrl: string;
    gameName: string;
};

const gameUrl = "/games.tsv";

const Game = () => {
    const [games, setGames] = useState<GameVideo[]>([]);

    useEffect(() => {
        fetch(gameUrl)
            .then((res) => {
                return res.text();
            }).then((body) => {
                const lines = body.split("\n");
                const games = lines.slice(1, lines.length).map(line => {
                    const elements = line.trim().split("\t");
                    return {
                        videoId: elements[0],
                        title: elements[1],
                        publishedAt: new Date(elements[2]),
                        thumbnailUrl: elements[3],
                        gameName: elements[4],
                    };
                }).filter(
                    game => game.gameName
                ).sort((a, b) => {
                    const publishedAt = b.publishedAt.getTime() - a.publishedAt.getTime();
                    return publishedAt;
                });

                setGames(games);
            });
    }, []);

    return (
        <main>
            <Container maxWidth="lg" className="s-container">
                <Typography component="h6" variant="h6">🎮 ゲーム実況</Typography>
                <Paper variant="outlined" className="d-margin">
                    <Typography variant="body2">
                        これまでのゲーム配信が検索できます。
                    </Typography>
                </Paper>
                <GameSearcher games={games} />
            </Container>
        </main >
    );
};

export default Game;