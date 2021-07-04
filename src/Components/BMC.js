import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bmc: {
    marginTop: 32,
  },
});

export default function BMC() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Button
        variant="contained"
        color="primary"
        className={classes.bmc}
        component="a"
        href="https://www.buymeacoffee.com/bearwithme"
      >
        🚀 Buy me a weekly option
      </Button>
    </Grid>
  );
}
