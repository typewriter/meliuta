import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import GameSearcher from './GameSearcher';

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
                        これまでのゲーム配信を、ゲームごとに絞り込めます。
                    </Typography>
                </Paper>
                <GameSearcher games={games} />
            </Container>
        </main >
    );
};

export default Game;