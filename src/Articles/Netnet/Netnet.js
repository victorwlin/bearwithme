import React from "react";
import {
  Typography,
  Grid,
  Modal,
  Button,
  List,
  ListItem,
  ListItemText,
  Link,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../../Components/Header";
import table from "./netnet-table.jpg";
import Contact from "../../Components/Contact";

const useStyles = makeStyles({
  section: {
    marginTop: 32,
  },
  image: {
    maxWidth: "100%",
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
});

function Netnet() {
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
          Benjamin Graham's net current asset investment strategy
        </Typography>
        <Typography variant={subtitle} color="textSecondary">
          Also commonly known as the net net strategy
        </Typography>
        <Typography variant={date}>November 29, 2020</Typography>

        <Typography variant={body} className={classes.section}>
          Like trillions of people who came before me, I’m trying to answer a
          question that will plague mankind for as long as equity markets still
          exist: Does Benjamin Graham’s Net Current Asset strategy (or Net Net
          strategy) still work? To answer this question, I’m doing a backtest of
          the 22-year period from April 1, 1998 to March 31, 2020. To run the
          backtest, I’m using QuantConnect.
        </Typography>

        <Typography variant={section} className={classes.section}>
          The Universe
        </Typography>
        <Typography variant={body}>
          I’m focusing exclusively on US equities. QuantConnect gets its data
          from Morningstar, and the Morningstar dataset includes approximately
          5,000 companies. The dataset excludes illiquid OTC stocks.
        </Typography>

        <Typography variant={section} className={classes.section}>
          Selection Criteria
        </Typography>
        <Typography variant={body} paragraph>
          I’m following the strategy in its simplest form. I calculate Net
          Current Assets by starting with Current Assets and subtracting both
          Total Liabilities and Preferred Shares.
        </Typography>
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={11}>
            <Typography paragraph variant="overline">
              Net Current Assets = Current Assets - Total Liabilities -
              Preferred Shares
            </Typography>
          </Grid>
        </Grid>
        <Typography variant={body} paragraph>
          Then I divide Net Current Assets by Outstanding Common Shares and
          compare that with the Share Price. If the Share Price is less than 66%
          of the Net Current Assets per Share, then the company will be selected
          for the portfolio.
        </Typography>
        <Typography variant={body}>
          I’m aware there are many variations of the Net Current Assets formula.
          Some people like to include Operating Leases as a liability. Some
          people like to take a haircut on Accounts Receivable and other asset
          classes. I know these variations exist, but I’m just going to keep
          things simple.
        </Typography>

        <Typography variant={section} className={classes.section}>
          Portfolio Construction and Execution
        </Typography>
        <Typography variant={body}>
          Each year on April 1st, the eligible universe will be pulled and
          filtered until the only companies remaining are the ones that meet our
          criteria. Then an equally weighted portfolio will be put together on
          the earliest trading day and held until March 31st of the next year.
          Each year’s portfolio starts with $100,000.
        </Typography>

        <Typography variant={section} className={classes.section}>
          Commissions
        </Typography>
        <Typography variant={body} paragraph>
          The commission scheme used is the fixed rate pricing for Interactive
          Brokers Pro.
        </Typography>
        <Typography variant={body}>
          I have to admit I struggled over how I should handle commissions. On
          one hand, many brokers no longer charge commissions, but on the other
          hand, Payment for Order Flow does seem to extract some sort of value
          from investors. The compromise I’m using is to include commissions for
          buying but not to include commissions for selling. It’s like only half
          of the commissions are included. If that seems weird, don’t worry.
          I’ll discuss the impact of commissions later.
        </Typography>

        <Typography variant={section} className={classes.section}>
          Known Errors
        </Typography>
        <Typography variant={body} paragraph>
          The data is not perfect. I picked a small sample of companies and did
          my own verification of their financials with their 10-K’s and 10-Q’s.
          While overall I was pleasantly surprised by how accurate the financial
          data is, I did find some anomalies.
        </Typography>
        <Typography variant={body} paragraph>
          First, there seems to be a problem with how Morningstar records Total
          Liabilities. When the company’s balance sheet has a Total Liabilities
          line, it works just fine. However, when the balance sheet doesn’t have
          a Total Liabilities line, the database seems to record some random
          number. As a result, some of the companies selected might not actually
          meet the criteria.
        </Typography>
        <Typography variant={body} paragraph>
          Second, I also saw a case of one company that did a reverse split, but
          the database didn’t update the share count and price appropriately, so
          whoever was holding that company on the day of the split would have
          instantly had more than a 1200% gain. This case didn’t fall within the
          backtesting period, but there could be other split errors that snuck
          themselves into the backtest.
        </Typography>

        <Typography variant={section} className={classes.section}>
          Benchmark
        </Typography>
        <Typography variant={body}>
          I used the S&P 500 as measured by the SPY ETF as my benchmark. Now you
          could correctly argue that since most of these Net Net stocks are
          microcap that I should be using a microcap ETF, but I decided to use
          the S&P 500 just because it’s the most popular.
        </Typography>

        <Typography variant={section} className={classes.section}>
          Data
        </Typography>
        <Button onClick={handleOpen} size="small">
          <img src={table} alt="Table" className={classes.image} />
        </Button>
        <Modal open={open} onClose={handleClose} onClick={handleClose}>
          <Grid className={classes.modal}>
            <img src={table} alt="Table" className={classes.modalImage} />
          </Grid>
        </Modal>

        <Typography variant={section} className={classes.section}>
          Results
        </Typography>
        <Typography variant={body} paragraph>
          CAGR - The Net Net strategy had a higher CAGR over the 22-year period
          of 6.36% vs the SPY’s 5.71%. If you started with $100K on April 1,
          1998, on March 31, 2020 you would have $388K with the Net Net strategy
          and $339K with SPY. That’s almost $50K more if you used the Net Net
          strategy instead of SPY. Once again, I am only assuming commissions
          for buying and not for selling. If you were to assume commission for
          both buying and selling, the Net Net strategy CAGR would be reduced to
          around 6.0%. If you were to assume no commissions at all, the CAGR
          would be around 6.6%.
        </Typography>
        <Typography variant={body} paragraph>
          Timing - The outperformance generated by the Net Net strategy seems to
          be driven by a high return early on in the year April 1999 to March
          2000. If you had started Net Net investing in April 2000 rather than
          April 1998, there would not have been any Net Net outperformance. In
          fact, if you had started Net Net investing at any time after April
          2000, your performance would either be similar to SPY or significantly
          worse. For example, if you had started investing in April 2006, in
          March 2020 after 14 years of investing, you would be down 17.39%
          overall. Whereas with SPY investing, there is no comparable stretch of
          time that resulted in overall negative growth.
        </Typography>
        <Typography variant={body} paragraph>
          Volatility - The Net Net strategy is much more volatile than SPY. The
          average drawdown over the 22-year period was almost twice as high at
          29% vs 16%. The Net Net strategy also had negative returns in 11 out
          of 22 years, while SPY only had negative returns in five years. There
          are also years such as April 1998 to March 1999 and April 2014 to
          March 2015 where the Net Net strategy had a significantly negative
          return, but the SPY was actually up. On the other hand, there were no
          years at all in which the SPY was down, but the Net Net strategy was
          up.
        </Typography>
        <Typography variant={body}>
          Diversification - One of the criticisms of trying to use the Net Net
          strategy in today’s market is that you won’t be able to find enough
          Net Net stocks to have a diversified portfolio. Imagine my surprise
          when I saw that the smallest portfolio during my backtest held 102
          companies, and the largest portfolio held 509 companies. I have three
          theories as to why I was able to find so many Net Net companies:
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText>
              1. As mentioned in the ‘Known Errors’ section, there are probably
              at least a few companies that only met the criteria for inclusion
              because their Total Liabilities are understated in the database.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              2. I didn’t set a minimum market cap, so I suspect many of the
              companies are microcap or even smaller than microcap. Many people
              would probably not consider investing in companies of this size.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              3. When I was sampling the portfolios, I noticed there were many
              small biotech companies that never had any revenue in their entire
              history. These entities were basically piles of cash with R&D
              departments working on new drugs. Again it’s possible that many
              people don’t include these companies when constructing Net Net
              portfolios.
            </ListItemText>
          </ListItem>
        </List>

        <Typography variant={section} className={classes.section}>
          Does Benjamin Graham's Net Current Asset strategy still work?
        </Typography>
        <Typography variant={body} paragraph>
          While my backtest does show that Benjamin Graham’s Net Current Asset
          Value strategy performed better than SPY over the 22-year period of
          the test, the outperformance was driven by one high-return year in the
          beginning of the backtest. Without the return from April 1999 to March
          2000, the Net Net strategy would have performed the same or far worse
          than SPY while also being significantly more volatile. To answer the
          original question: No, I don’t think Benjamin Graham’s Net Current
          Asset strategy still works.
        </Typography>

        <Typography variant={section} className={classes.section}>
          Link to Backtest
        </Typography>
        <Typography variant={body} paragraph>
          I am sharing my QuantConnect backtest in hopes that it will be useful
          to you. If you do your own backtest and have interesting results, I
          would love to hear about it. Also if you find any errors, please bring
          it to my attention.
        </Typography>
        <Typography variant={body} paragraph>
          I ran these backtests in November 2020, and since then there have been
          solved data issues, changes in Morningstar data, and/or changes in the
          backtesting engine, so the results you see when running my code will
          be different. I plan to do an update highlighting these changes.
        </Typography>
        <Link href="https://www.quantconnect.com/forum/discussion/10473/my-algorithm-for-benjamin-graham-039-s-net-current-asset-value-strategy-also-known-as-net-net-strategy/p1">
          Backtest on QuantConnect
        </Link>

        <Typography variant={section} className={classes.section}>
          Contact Me
        </Typography>
        <Contact />
      </Grid>
    </Container>
  );
}

export default Netnet;
