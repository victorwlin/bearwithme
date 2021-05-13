import { Paper, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@reach/router";

import bear from "../Articles/Netnet/netnet-bear.jpg";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: `url(${bear})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function FeaturedPost() {
  const classes = useStyles();

  return (
    <Paper className={classes.mainFeaturedPost}>
      <Grid container>
        <Grid item md={6} />
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography variant="h3" color="inherit" gutterBottom>
              Benjamin Graham's net current asset investment strategy
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Like trillions of people who came before me, I’m trying to answer
              a question that will plague mankind for as long as equity markets
              still exist: Does Benjamin Graham’s Net Current Asset strategy (or
              Net Net strategy) still work? To answer this question, I’m doing a
              backtest of the 22-year period from April 1, 1998 to March 31,
              2020.
            </Typography>
            <Link to="netnet">Continue reading...</Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

// <Link href="/">Continue reading...</Link>
