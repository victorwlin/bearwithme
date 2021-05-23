import { Paper, Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@reach/router";

import bear from "../Articles/UW1Sig/uw1sig-panda.jpg";

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
                Unusual Whales: Developing a Trading Strategy, Part 1
              </Typography>

              <Typography variant="subtitle1" color="textSecondary">
                May 23, 2021
              </Typography>

              <Typography variant="h5" color="inherit" paragraph>
                Unusual Whales is a trading tool that alerts you when large
                trades are being made in the market. The idea being that there
                are hedge funds and other big players out there who might have
                more information than everyone else, and it might pay to follow
                these whales into their positions. The tool does a bunch of
                different types of alerts, but for this series, I’m going to be
                focusing exclusively on options.
              </Typography>

              <Button variant="contained">
                <Link to="uw1sig" className={classes.link}>
                  Continue reading
                </Link>
              </Button>
            </div>
          </Grid>
          <Grid item md={6} />
        </Grid>
      </div>
    </Paper>
  );
}
