import React from "react";
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Link,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../../Components/Header";
import Contact from "../../Components/Contact";

import pvalCall from "../UW1Sig/pval-call.jpg";
import pvalPut from "../UW1Sig/pval-put.jpg";
import pvalSummary from "../UW1Sig/pval-summary.jpg";

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
}));

function UW1sig() {
  const classes = useStyles();

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
          Unusual Whales: Developing a Trading Strategy, Part 1
        </Typography>
        <Typography variant={subtitle} color="textSecondary">
          Data Preparation and Significance of Variables
        </Typography>
        <Typography variant={date}>May 23, 2021</Typography>

        <Typography variant={body} className={classes.section}>
          Unusual Whales is a trading tool that alerts you when large trades are
          being made in the market. The idea being that there are hedge funds
          and other big players out there who might have more information than
          everyone else, and it might pay to follow these whales into their
          positions. The tool does a bunch of different types of alerts, but for
          this series, I’m going to be focusing exclusively on options.
        </Typography>
        <Typography variant={body} className={classes.section}>
          What I like most about Unusual Whales is that the people who made it
          are fairly transparent. Without signing up, anyone can go to their
          site and download a list of every single alert that was produced all
          the way back to June 2020. Because all of this data is freely
          available, we can do our own analysis to see if hunting whales has any
          merit and perhaps increase our chance of profit by developing a
          strategy to hunt whales more selectively.
        </Typography>

        <Typography variant={section} className={classes.section}>
          Data Preparation
        </Typography>
        <Typography variant={body} paragraph>
          In order to do the type of analysis that I want, I’m going to have to
          make some adjustments to the raw file. For this series of posts I’m
          going to be looking at the period from December 2020 to April 2021.
          The reason I’m starting in December 2020 is because greek values were
          only recorded by Unusual Whales starting in that month.
        </Typography>
        <Typography variant={body} paragraph>
          One of the variables that I think might be important in hunting whales
          is days to expiration, and if you look at the raw data, there is a
          column titled ‘days_to_expiry’. However, you’ll quickly notice that a
          lot of the numbers are negative. It turns out that column records the
          number of days from the date the report was created to the expiration
          date. So all the alerts that have already expired when the report was
          created have negative values. I’m not sure why anyone would want to
          know this information, but it means that column is not the actual days
          to expiration that we want, and we’ll have to create it ourselves.
          Thankfully all the necessary information is already in there. Simply
          populate a new column with the difference between the expiration date
          and the alert date in number of days.
        </Typography>
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={11}>
            <Typography paragraph variant="overline">
              expires_in = expires_at - alert_date
            </Typography>
          </Grid>
        </Grid>
        <Typography variant={body} paragraph className={classes.section}>
          Another variable that I think is important is the number of days it
          took that option to reach its high point. Again, all the information
          is there, simply populate a new column with the difference between the
          high date and the alert date.
        </Typography>
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={11}>
            <Typography paragraph variant="overline">
              days_to_high = high_date - alert_date
            </Typography>
          </Grid>
        </Grid>
        <Typography variant={body} paragraph className={classes.section}>
          And finally the last modification I like to make before I start the
          analysis is adding a column for adjusted high return. The report comes
          with a column titled ‘high_return’, but this is the high price over
          the midpoint of bid and ask price at the time of alert. (Presumably
          the ‘high’ column is also the midpoint of the high bid and high ask,
          but I’m not entirely sure about that.) Now I don’t know about you, but
          whenever I buy options, I almost always get a price closer to the ask
          than to the bid. So just to be a little more conservative in
          calculating returns, I like to use the ask price at time of alert as
          my cost basis. My broker Schwab also charges 65 cents per contract for
          each trade, so I add that on to the buying price and I take that out
          of the selling price when I calculate my return.
        </Typography>
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={11}>
            <Typography paragraph variant="overline">
              adj_high_return = (high - 0.0065) / (ask + 0.0065) - 1
            </Typography>
          </Grid>
        </Grid>

        <Typography variant={section} className={classes.section}>
          Significance of Variables
        </Typography>
        <Typography variant={body} paragraph>
          The first step in the journey to develop a whale hunting strategy is
          to determine what variables we should be focusing on and what
          variables we might want to ignore. The site allows you to filter your
          alerts based on a bunch of variables. I have chosen 12 of these
          variables to do further analysis.
        </Typography>

        <Grid container item className={classes.listContainer}>
          <Grid item xs={1} />
          <Grid item xs={6} sm={3} md={2} className={classes.list}>
            <List dense>
              <ListItem>
                <ListItemText primary="ask" />
              </ListItem>
              <ListItem>
                <ListItemText primary="bid" />
              </ListItem>
              <ListItem>
                <ListItemText primary="delta" />
              </ListItem>
              <ListItem>
                <ListItemText primary="buy_amount" />
              </ListItem>
              <ListItem>
                <ListItemText primary="expires_in" />
              </ListItem>
              <ListItem>
                <ListItemText primary="gamma" />
              </ListItem>
              <ListItem>
                <ListItemText primary="implied_volatility" />
              </ListItem>
              <ListItem>
                <ListItemText primary="open_interest" />
              </ListItem>
              <ListItem>
                <ListItemText primary="theta" />
              </ListItem>
              <ListItem>
                <ListItemText primary="vega" />
              </ListItem>
              <ListItem>
                <ListItemText primary="vol_oi" />
              </ListItem>
              <ListItem>
                <ListItemText primary="volume" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={5} sm={8} md={9} />
        </Grid>

        <Typography variant={body} paragraph>
          For each variable I did a t-test to determine whether the mean value
          for that variable is higher or lower for winners as compared with
          losers. Winners are defined as alerts that reach a certain return, and
          losers are alerts that don’t. I will run a separate test for a variety
          of different win definitions. I am going to use a two-sample t-test
          with the two samples being winners and losers. I will be using the
          Welch approximation so that I’m not assuming the variances and
          standard deviations of both samples are equal. And finally, I’m going
          to do a one-tailed test, because I’m only trying to determine if the
          mean for winners is higher or lower than the mean for losers. Here is
          my null and alternative hypothesis:
        </Typography>

        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={11}>
            <Typography>
              H<sub>0</sub>: μ<sub>winners</sub> = μ<sub>losers</sub>
            </Typography>
            <Typography paragraph>
              H<sub>a</sub>: μ<sub>winners</sub> &#62; or &#60; μ
              <sub>losers</sub>
            </Typography>
          </Grid>
        </Grid>

        <Typography variant={body} paragraph className={classes.section}>
          After doing a t-test for each of my 12 variables with several
          definitions of winners, these are my results in the form of p-values.
          If the p-value is less than 0.01, we can reject the null hypothesis
          with 99% confidence. If the p-value is less than 0.05, we can reject
          the null hypothesis with 95% confidence. And so on. If the p-value is
          greater than 0.10, we will not reject the null hypothesis.
        </Typography>
        <Typography variant={body} paragraph>
          I’m going to start with the calls first.
        </Typography>

        <img
          src={pvalCall}
          alt="P-values for Calls"
          className={classes.image}
        />

        <Typography variant={body} paragraph className={classes.section}>
          <i>buy_amount</i> and <i>ask</i> are significant at the 99% confidence
          level for every single win definition. <i>bid</i> and{" "}
          <i>expires_in</i> miss the 99% confidence level for a single win
          definition in which they do have significance at the 95% confidence
          level instead. <i>delta</i>, <i>vega</i>, and <i>gamma</i> are also
          significant for all win definitions except there is no significance at
          the 10% win definition.
          <i>implied_volatility</i> looks more significant for higher win
          definitions and vice versa for <i>theta</i>. <i>open_interest</i> and{" "}
          <i>vol_oi</i> have some pockets of lower significance, and{" "}
          <i>volume</i> is not significant at all for any win definition.
        </Typography>
        <Typography variant={body} paragraph>
          Now, using the same methodology, let’s look at puts.
        </Typography>

        <img src={pvalPut} alt="P-values for Puts" className={classes.image} />

        <Typography variant={body} paragraph className={classes.section}>
          <i>expires_in</i> and <i>vega</i> are significant at the 99%
          confidence level for every single win definition. <i>delta</i>,{" "}
          <i>ask</i>, <i>buy_amount</i>, <i>bid</i>, and{" "}
          <i>implied_volatility</i> miss the 99% confidence level for a single
          win definition in which they have significance at the 95% confidence
          level instead. Interestingly <i>theta</i> looks like it’s more
          significant for higher win definitions, which is the exact opposite
          finding we had for the calls.
          <i>vol_oi</i> has some pockets of significance, but the findings
          largely correspond with what we saw for the calls in that{" "}
          <i>volume</i> and <i>open_interest</i> are probably not worth looking
          at. What was surprising for me is that <i>gamma</i>, which was
          significant for calls, is not significant at all for puts.
        </Typography>
        <Typography variant={body}>
          Here’s a summary of my results with the shades of green being reliable
          variables, yellow being less reliable, and red meaning you probably
          shouldn’t rely on those variables at all.
        </Typography>

        <img
          src={pvalSummary}
          alt="Summary of significant variables"
          className={classes.summaryImage}
        />

        <Typography variant={body} paragraph className={classes.section}>
          What really stood out for me is the lack of significance for variables
          such as <i>open_interest</i>, <i>vol_oi</i>, and <i>volume</i>. If you
          look at most of the whale hunting strategies shared online, they
          almost universally look for larger volumes, lower open interest, or
          higher vol/oi. But if you’re to believe the analysis in this post,
          these variables are not capable of distinguishing winners from losers.
          Your strategy might actually benefit from ignoring these variables
          altogether.
        </Typography>
        <Typography variant={body} paragraph>
          After doing these t-tests, I think we have a better idea which
          variables to focus on and which variables to ignore. In the next part
          I want to take a deeper dive into each variable by calculating win
          probabilities and really beginning to develop a trading strategy.
        </Typography>

        <Typography variant={section} className={classes.section}>
          Contact Me
        </Typography>
        <Contact />
      </Grid>
    </Container>
  );
}

export default UW1sig;
