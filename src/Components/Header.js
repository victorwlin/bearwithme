import React from "react";
import { Typography, Toolbar, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Link } from "react-router-dom";

import bear from "../Articles/bear.png";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  // this is required to be able to center the title
  toolbarTitle: {
    flex: 1,
  },
  bear: {
    maxHeight: "40px",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <Toolbar className={classes.toolbar}>
      <Router>
        <Link to="/">
          <IconButton>
            <img src={bear} alt="bear" className={classes.bear} />
          </IconButton>
        </Link>
        <Typography
          align="center"
          className={classes.toolbarTitle}
          variant="h5"
        >
          Bear with Me
        </Typography>
      </Router>
    </Toolbar>
  );
}

export default Header;
