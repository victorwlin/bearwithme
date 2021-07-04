import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";

import bear from "../Articles/Netnet/netnet-bear.jpg";
import uw1sigPanda from "../Articles/UW1Sig/uw1sig-panda.jpg";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function Post() {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                Unusual Whales: Developing a Trading Strategy, Part 1
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                May 23, 2021
              </Typography>
              <Typography variant="subtitle1" paragraph>
                Unusual Whales is a trading tool that alerts you when large
                trades are being made in the market. The idea being that there
                are hedge funds and other big players out there who might have
                more information than everyone else, and it might pay to follow
                these whales into their positions. The tool does a bunch of
                different types of alerts, but for this series, I’m going to be
                focusing exclusively on options.
              </Typography>
              <Button variant="contained" component="a" href="uw1sig">
                Continue reading
              </Button>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={uw1sigPanda}
              title="panda"
            />
          </Hidden>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                Benjamin Graham's Net Current Asset Investment Strategy
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                November 29, 2020
              </Typography>
              <Typography variant="subtitle1" paragraph>
                Like trillions of people who came before me, I’m trying to
                answer a question that will plague mankind for as long as equity
                markets still exist: Does Benjamin Graham’s Net Current Asset
                strategy (or Net Net strategy) still work? To answer this
                question, I’m doing a backtest of the 22-year period from April
                1, 1998 to March 31, 2020. To run the backtest, I’m using
                QuantConnect.
              </Typography>
              <Button variant="contained" component="a" href="netnet">
                Continue reading
              </Button>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={bear}
              title="bear"
            />
          </Hidden>
        </Card>
      </Grid>
    </Grid>
  );
}
