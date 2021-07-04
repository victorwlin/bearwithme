import { Paper, Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import bear from "../Articles/UW2WinRates/uw2winrate-panda.jpg";

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
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.4)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  link: {
    textDecoration: "none",
  },
}));

export default function FeaturedPost() {
  const classes = useStyles();

  return (
    <Paper className={classes.mainFeaturedPost}>
      <div className={classes.overlay}>
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography variant="h3" color="inherit" gutterBottom>
                Unusual Whales: Developing a Trading Strategy, Part 2
              </Typography>

              <Typography variant="subtitle1" color="textSecondary">
                June 21, 2021
              </Typography>

              <Typography variant="h5" color="inherit" paragraph>
                Today I want to see how we can use variables to find winning
                trades and increase our win rate beyond the Unusual Whales
                benchmark. I want to see if any of the variables have certain
                ranges where the win rate is greater than the benchmark. For
                each of the 12 variables, I’m going to sort the alerts by that
                variable, and then I’m going to group the alerts into deciles.
              </Typography>

              <Button variant="contained" component="a" href="uw2winrates">
                Continue reading
              </Button>
            </div>
          </Grid>
          <Grid item md={6} />
        </Grid>
      </div>
    </Paper>
  );
}
