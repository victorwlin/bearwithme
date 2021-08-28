import React from "react";
import { Button, Grid } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  twit: {
    marginBottom: 32,
  },
});

function Contact() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Button href="https://twitter.com/imbearwithme" className={classes.twit}>
        <TwitterIcon />
      </Button>
    </Grid>
  );
}

export default Contact;
