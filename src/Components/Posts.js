import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";

import { Link } from "@reach/router";

import bear from "../Articles/Netnet/netnet-bear.jpg";

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
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                Benjamin Graham's net current asset investment strategy
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
              <Link to="netnet">Continue reading...</Link>
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
      </CardActionArea>
    </Grid>
  );
}
