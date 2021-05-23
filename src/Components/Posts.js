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
                Placeholder
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                23 May 2021
              </Typography>
              <Typography variant="subtitle1" paragraph>
                Blah blah blah
              </Typography>
              <Link to="uw1sig">Continue reading...</Link>
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
