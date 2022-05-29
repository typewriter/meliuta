import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';

export const Closed = () => {
  return (
    <main>
      <Container maxWidth="lg" className="s-container">
        <Paper variant="outlined" className="d-margin">
          <Typography variant="body2">
            にじさんじを卒業されたメリッサ・キンレンカさんの歌がもっと聴きたくて個人で作った非公式のお歌まとめファンサイトでした。<br />
            2022年6月をもってクローズしました。これまでありがとうございました。
          </Typography>
        </Paper>
        <Grid container justify="center" className="d-margin">
          <Grid item xs={12} sm={6}>
            <Card>
              <CardMedia component="img" image="/46604848122_578ec22436_w.jpg" />
              <CardContent>
                <Typography variant="body2" align="center">
                  新たな旅路に、幸多からんことを。
                </Typography>
                <Typography variant="caption">
                  <small>photo: <Link href="https://flic.kr/p/2e1j2Eb">Bennilover</Link></small>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Divider />
        <Box mt={2}>
          サイト運営者：たいぷらいた～ (Twitter: <Link color="primary" href="https://twitter.com/no_clock">@no_clock</Link>, Mail: <Link color="primary" href="mailto:typewriter.noclock@gmail.com">typewriter.noclock@gmail.com</Link>, マシュマロ: <Link color="primary" href="https://marshmallow-qa.com/no_clock">@no_clock</Link>)
        </Box>
      </Container>
    </main>
  );
}