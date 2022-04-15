import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { YouTube } from "@material-ui/icons";
import React, { useState } from "react";
import { GameVideo } from "./Game";
import { format } from "date-fns";

interface Props {
  games: GameVideo[];
}

function GameSearcher(props: Props) {
  const [filter, setFilter] = useState([] as string[]);

  return (
    (props.games.length === 0 ?
      <>
        <CircularProgress /> 読み込んでいます...
      </>
      :
      <Box lineHeight={2}>
        <Typography component="h6" variant="h6">
          ゲーム一覧
        </Typography>
        <Typography variant="body2">
          タップすると絞り込みできます。
        </Typography>
        <Box mb={2}>
          {
            Array.from(props.games.reduce((group, item) => {
              group.set(item.gameName, (group.get(item.gameName) || 0) + 1);
              return group;
            }, new Map<string, number>()).entries()).sort((a, b) => {
              return b[1] - a[1];
            }).map((game) => (
              <>
                {(filter.includes(game[0]) ?
                  <Chip
                    size="small"
                    label={`${game[0]} (${game[1]})`}
                    variant="default"
                    color="secondary"
                    onDelete={() => setFilter(filter.filter(x => x !== game[0]))}
                  />
                  :
                  <Chip
                    size="small"
                    label={`${game[0]} (${game[1]})`}
                    variant="outlined"
                    color="default"
                    onClick={() => setFilter([game[0]])}
                  />
                )}
                &nbsp;
              </>
            ))
          }
        </Box>
        <Typography component="h6" variant="h6">
          {filter.length !== 0 ? `「${filter.join('・')}」の` : ""}ゲーム動画 ({filter.length !== 0 ? "新しい順" : "最新 30 件"})
        </Typography>
        <Grid container spacing={1}>
          {props.games.filter(
            (game) => filter.length === 0 ? true : filter.includes(game.gameName)
          ).slice(0, 30).map((game) => (
            <Grid item key={game.videoId} xs={12} sm={6} md={4}>
              <Paper variant="outlined">
                <Box bgcolor={game.publishedAt.getTime() > new Date().getTime() ? "secondary.light" : "secondary.main"}>{format(game.publishedAt, 'yyyy/MM/dd')} {game.publishedAt.getTime() > new Date().getTime() ? `${format(game.publishedAt, 'HH:mm')}配信予定` : "配信"}{filter.length !== 1 ? `: ${game.gameName}` : ""}</Box>
                <Grid container alignItems="center" wrap="nowrap">
                  <Grid item>
                    <Link href={`https://www.youtube.com/watch?v=${game.videoId}`} rel="noopener" target="_blank"><img alt="サムネイル" src={game.thumbnailUrl} /></Link>
                  </Grid>
                  <Grid item>
                    <Link href={`https://www.youtube.com/watch?v=${game.videoId}`} rel="noopener" target="_blank"><YouTube style={{ verticalAlign: 'middle', display: 'inline-block' }} /> {game.title}</Link>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    )
  );
}

export default GameSearcher;