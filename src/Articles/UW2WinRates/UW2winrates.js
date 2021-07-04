import React from "react";
import {
  Typography,
  Grid,
  Link,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Modal,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../../Components/Header";
import Contact from "../../Components/Contact";
import BMC from "../../Components/BMC";

import winRatesImage from "../UW2WinRates/WinRates_dec20-may21_Put.jpg";

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: 32,
  },
  image: {
    maxWidth: "100%",
  },
  summaryImage: {
    maxWidth: "50%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  list: {
    backgroundColor: theme.palette.background.paper,
  },
  listContainer: {
    marginBottom: 16,
  },
  modalImage: {
    maxHeight: "100%",
  },
  modal: {
    height: "95vh",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: 0,
  },
}));

function UW2winrates() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const title = "h3";
  const subtitle = "h5";
  const date = "overline";
  const section = "h6";
  const body = "body1";

  return (
    <Container maxWidth="lg">
      <Header />
      <Grid item xs={12}>
        <Typography variant={title} className={classes.section}>
          Unusual Whales: Developing a Trading Strategy, Part 2
        </Typography>
        <Typography variant={subtitle} color="textSecondary">
          Win rates by deciles by variables
        </Typography>
        <Typography variant={date}>June 21, 2021</Typography>

        <Typography variant={body} className={classes.section} paragraph>
          Welcome to my second post in a series of posts about Unusual Whales.
          If you haven’t read the first post, you can find it{" "}
          <Link href="uw1sig">here</Link>.
        </Typography>
        <Typography variant={body}>
          Last time I tested whether for certain variables there were
          significant differences between the mean averages of the winning and
          losing alerts. Today I want to see how we can use those variables to
          find winning trades and increase our win rate beyond the Unusual
          Whales benchmark. First, let’s define that benchmark.
        </Typography>

        <Typography variant={section} className={classes.section}>
          Unusual Whales Benchmark
        </Typography>
        <Typography variant={body} paragraph>
          In my first post, I used data from December 2020 to March 2021, but
          for this post, I’m going to expand the dataset to include data up to
          May 2021. As with my prior post, I will show a variety of win
          definitions, but I will be focusing on the 25% win definition for the
          rest of this post. Here is the performance of Unusual Whales without
          any filters applied:
        </Typography>

        <TableContainer className={classes.listContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell># of Alerts</TableCell>
                <TableCell>Win Definition 10</TableCell>
                <TableCell>Win Definition 25</TableCell>
                <TableCell>Win Definition 50</TableCell>
                <TableCell>Win Definition 75</TableCell>
                <TableCell>Win Definition 100</TableCell>
                <TableCell>Avg Adj High Return</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Call</TableCell>
                <TableCell align="center">9,765</TableCell>
                <TableCell align="center">75.9%</TableCell>
                <TableCell align="center">59.8%</TableCell>
                <TableCell align="center">43.2%</TableCell>
                <TableCell align="center">33.0%</TableCell>
                <TableCell align="center">26.0%</TableCell>
                <TableCell align="center">117.9%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Put</TableCell>
                <TableCell align="center">8,419</TableCell>
                <TableCell align="center">74.0%</TableCell>
                <TableCell align="center">55.7%</TableCell>
                <TableCell align="center">37.4%</TableCell>
                <TableCell align="center">27.3%</TableCell>
                <TableCell align="center">21.0%</TableCell>
                <TableCell align="center">84.2%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant={body} paragraph>
          As you can see, there were a total of 9,765 call alerts and 8,419 put
          alerts in our time period. For the 25% win definition, the win rate
          for calls is 59.8% and the win rate for puts is 55.7%. This will be
          our benchmark to beat as we do a deep dive into our variables.
        </Typography>

        <Typography variant={section} className={classes.section}>
          Win Rates by Deciles
        </Typography>
        <Typography variant={body} paragraph>
          I want to see if any of the variables have certain ranges where the
          win rate is greater than the benchmark. For each of the 12 variables,
          I’m going to sort the alerts by that variable, and then I’m going to
          group the alerts into deciles. Using puts as an example, we have 8,419
          put alerts in the time period, so each decile will have 842 alerts,
          except for the tenth decile which will only have 841. Next I will
          calculate the win rate of that decile, so we can start doing
          comparisons.
        </Typography>
        <Typography variant={body} paragraph>
          The results are below, and I highly encourage you to use the
          spreadsheet to follow along.
        </Typography>
        <Typography variant={body} paragraph>
          <Link href="https://docs.google.com/spreadsheets/d/1LP86vk705GyhSSrczsT2BwnEhIqUpoo4mAGKehyxHlU/edit?usp=sharing">
            Win Rates Spreadsheet
          </Link>
        </Typography>

        <Button onClick={handleOpen} size="small">
          <img src={winRatesImage} alt="Table" className={classes.image} />
        </Button>
        <Typography variant="overline">
          This is just an excerpt. Open the spreadsheet for the full data.
        </Typography>
        <Modal open={open} onClose={handleClose} onClick={handleClose}>
          <Grid className={classes.modal}>
            <img
              src={winRatesImage}
              alt="Table"
              className={classes.modalImage}
            />
          </Grid>
        </Modal>

        <Typography variant={body} paragraph className={classes.section}>
          As you can see, all 12 variables are split into deciles with Decile 1
          being the decile with the smallest values of that variable, and Decile
          10 being the decile with the largest values of that variable. The next
          column shows the number of alerts in that decile. Then we get to the
          Min and Max columns, which show the smallest and largest value in that
          decile, respectively. The thing to note is that the values are
          inclusive, and there is some overlap between the deciles. This is a
          bit of a weakness, because alerts with identical variable values
          sometimes get arbitrarily split into different deciles, but I wanted
          to keep the decile sizes roughly the same. The next columns are the
          win definitions and the win rates for that definition. Next we have
          the average high return for all alerts in that decile. And finally, I
          have calculated the average amount of days it took for winners in the
          25% win definition to reach their high return, and the standard
          deviation of that average.
        </Typography>
        <Typography variant={body} paragraph>
          As an example, this is how I would interpret the first row of the
          results for puts:
        </Typography>
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={11}>
            <Typography>
              For the <i>ask</i> variable, Decile 1 had 842 alerts. The minimum
              value of the decile was around 2 cents, and the maximum value was
              27 cents. If we set our win definition to 25%, then 55.7% of the
              alerts in this decile were winners. The average high return of all
              alerts in this decile was 122.3%. Of the winning alerts that met
              the 25% win definition, it took an average of around seven and a
              half days to reach their high with a standard deviation of around
              seven days.
            </Typography>
          </Grid>
        </Grid>

        <Typography variant={section} className={classes.section}>
          General Observations
        </Typography>
        <Typography variant={body} paragraph>
          Here are some of my general observations:
        </Typography>
        <ul>
          <li>
            <Typography paragraph>
              Lower buy amounts have a higher win rate. This is counterintuitive
              as high buy amounts are supposed to mean more conviction in the
              trade. There are so many whale hunting strategies out there right
              now that tell you to focus on the highest volumes and largest buy
              amounts, but that might not be the best course of action.
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              With an exception for the first decile of <i>ask</i> and{" "}
              <i>bid</i>, smaller <i>ask</i> and <i>bid</i> values seem to have
              a higher win rate. Perhaps this effect is similar to the small cap
              effect in stocks.
            </Typography>
          </li>
          <li>
            <Typography paragraph>
              Other than <i>buy_amount</i>, <i>ask</i>, and <i>bid</i>, I
              wouldn’t really feel comfortable applying a “larger is better” or
              “smaller is better” rule to any of the other variables. For most
              of the others, there seems to be a sweet spot or multiple sweet
              spots with higher win rates. Many of the whale hunting strategies
              that I see out there rely on a simple “larger is better” or
              “smaller is better” rule for some variables, but judging from the
              data, I think it would pay to adopt a more nuanced approach when
              developing your strategy.
            </Typography>
          </li>
        </ul>

        <Typography variant={section} className={classes.section}>
          Developing a Strategy
        </Typography>
        <Typography variant={body} paragraph>
          Now that we have the win rates by decile for all of the variables,
          it’s time to develop our strategy. Obviously this is a personal
          choice, but I’ll just share some ideas using calls as an example.
        </Typography>
        <Typography variant={body} paragraph>
          We could go back to the first post, where we ranked the variables by
          significance, and develop our strategy around the most reliably
          significant variable. For calls, it was <i>buy_amount</i>, which was
          significant for every win definition. From the win rates spreadsheet,
          it looks like Decile 1 had the highest win rate of 65.9%, so we can
          filter our alerts for <i>buy_amount</i> between $13,284 and $29,480.
          If we’re a more active trader, we could expand our filter to Decile 2,
          which had a similar win rate, by increasing the upper bound to
          $53,650.
        </Typography>
        <Typography variant={body} paragraph>
          We could also just choose a variable based on personal preference. For
          example, I always have tons of anxiety when buying weeklies, so maybe
          I will develop a strategy using the <i>expires_in</i> variable. I can
          see that Decile 6 has the highest return, so I will filter my alerts
          for options with between 30 to 39 days to expiration. That way none of
          my alerts will be for weeklies. So far I have been focused on the 25%
          win definition, which is my personal preference, but maybe you want to
          go for 100% return on your trades. To maximize your win rate, it might
          be better for you to go for Decile 3, which is between 8 to 14 days to
          expiration.
        </Typography>
        <Typography variant={body} paragraph>
          We could also develop a strategy based around restrictions on your
          portfolio. Let’s say you have a small portfolio, but you still want to
          diversify your options trades. You would want to use the <i>ask</i>{" "}
          variable to keep our individual trades small, but in this case, we can
          see that Decile 1, the lowest <i>ask</i>, performed worse than
          benchmark. It would probably be best if we focused on Decile 2, which
          has the highest win rate but still keeps our trades between $25 and
          $43.
        </Typography>
        <Typography variant={body} paragraph>
          For me personally, I don’t have any strong preferences or
          restrictions, so I’m just going to sort the deciles from highest to
          lowest win rate, and I’m going to go with <i>gamma</i>, which is a
          significant variable, and I’m going to filter for alerts between 0.07
          and 0.09 <i>gamma</i>. The expected win rate would be around 66.5%,
          which is 6.7% higher than the Unusual Whales benchmark. Similarly for
          puts, I will sort by highest win rate and choose <i>expires_in</i>{" "}
          between 23 to 32 days with a win rate of 65.2%, which is 9.5% higher
          than benchmark.
        </Typography>
        <Typography variant={body} paragraph>
          As you can see, we are well on our way to choosing filters that will
          beat the Unusual Whales benchmark, and I sincerely hope this analysis
          and the win rates spreadsheet will help you in developing your whale
          hunting strategy.
        </Typography>

        <Typography variant={section} className={classes.section}>
          Additional Materials
        </Typography>
        <Typography variant={body} paragraph>
          In addition to my win rates spreadsheet shared above, I am also going
          to make my consolidated data file available. It consolidates all
          months from December 2020 to May 2021 into one file and adds columns
          for <i>vol_oi</i>, <i>expires_in</i>, <i>days_to_high</i>, and{" "}
          <i>adj_high_return</i>. For a full explanation of how I prepare my
          data, please see the first post in this series.
        </Typography>
        <Typography variant={body} paragraph>
          <Link href="https://docs.google.com/spreadsheets/d/1cXFliiMV5dBxlkzgUNBGLQsdcIsobc_oeHNJlkOx0C4/edit?usp=sharing">
            All Alerts Consolidated - Dec20 to Mar21
          </Link>
        </Typography>
        <Typography variant={body} paragraph>
          I’m also going to share the same file with winner columns that
          indicate whether that particular alert met the win definition. The
          columns are labeled <i>TRUE</i> if it does and <i>FALSE</i> if it
          doesn't. This file is split into one for calls and one for puts to
          make the size a bit more manageable.
        </Typography>
        <Typography variant={body}>
          <Link href="https://docs.google.com/spreadsheets/d/1c6p38XSM42e8Q5NULEZes_MxBk8jZI2rymU4sig83lg/edit?usp=sharing">
            Calls Consolidated - Dec20 to Mar21
          </Link>
        </Typography>
        <Typography variant={body} paragraph>
          <Link href="https://docs.google.com/spreadsheets/d/13bHOKUb0Mh-swtgkqWZfuJh94o2rFRSP4Vb2p0_XToc/edit?usp=sharing">
            Puts Consolidated - Dec20 to Mar21
          </Link>
        </Typography>
        <Typography variant={body} paragraph>
          Finally, I’m going to share a GitHub repository of all the code I used
          for this analysis. But before I share it, let me be clear that none of
          what I did requires any coding whatsoever. The only reason I did the
          coding was because as I added more and more months’ worth of data,
          Google Sheets was getting slower and slower. If you run into the same
          challenge, you’re welcome to use my code. Everything is done in
          Danfo.js, which is a JavaScript library that is heavily inspired by
          the pandas library. Anyone familiar with the pandas API will easily be
          able to read and use Danfo.js.
        </Typography>
        <Typography variant={body} paragraph>
          <Link href="https://github.com/victorwlin/Unusual-Whales-Data-Analysis">
            GitHub Repository
          </Link>
        </Typography>

        <Typography variant={section} className={classes.section}>
          What's Next?
        </Typography>
        <Typography variant={body}>
          So far I have focused on using a single variable, but obviously we
          aren’t limited to just one. Up next I want to analyze whether
          different combinations of variables can produce even higher win rates,
          and I’ll show you my actual results over the last month.
        </Typography>

        <Typography variant={section} className={classes.section}>
          Thank You for the Support
        </Typography>
        <Typography variant={body}>
          Thank you to all the people who liked or commented on my last video,
          and thank you to the people who emailed me from my site. This is such
          a niche topic, and I really wasn’t expecting this many people to be
          interested, so thank you everyone for the support, and I really hope
          these videos and posts have been useful to you in some way.
        </Typography>

        <BMC />

        <Typography variant={section} className={classes.section}>
          Contact Me
        </Typography>
        <Contact />
      </Grid>
    </Container>
  );
}

export default UW2winrates;
