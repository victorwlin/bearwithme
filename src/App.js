import React from 'react';
import { Typography, Grid, Modal, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import table from './table.jpg';
import Contact from "./Contact";

const useStyles = makeStyles({
  section: {
    marginTop: 32
  },
  image: {
    maxWidth: "100%"
  },
  modalImage: {
    maxHeight: '100%'
  },
  modal: {
    height: '95vh',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 0
  }
});

function App() {
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
    <Grid container>
      
      <Grid item xs={1} sm={2} lg={3} />
      
      <Grid item xs={10} sm={8} lg={6}>

        <Typography variant={title} className={classes.section}>
          Benjamin Graham's net current asset investment strategy
        </Typography>
        <Typography variant={subtitle} color="textSecondary">
          Also commonly known as net net
        </Typography>
        <Typography variant={date}>
          November 29, 2020
        </Typography>
        
        <Typography variant={body} className={classes.section}>
          Like trillions of people who came before me, I am trying to answer a question that will plague mankind for as long as equity markets still exist: Does Benjamin Graham’s net current asset strategy (or net net strategy) still work?
        </Typography>

        <Typography variant={section} className={classes.section}>
          The Backtest
        </Typography>
        <Typography variant={body}>
          To answer this question, I will be doing a backtest of the 22-year period from April 1, 1998 to March 31, 2020. To run the backtest, I will be using QuantConnect, the algorithmic trading platform.
        </Typography>

        <Typography variant={section} className={classes.section}>
          The Universe
        </Typography>
        <Typography variant={body}>
          The universe is US equities. QuantConnect gets its corporate fundamental data from Morningstar, and the Morningstar dataset includes equities trading on the New York Stock Exchange, NASDAQ, American Exchange, and BATS. It excludes illiquid OTC stocks. There are approximately 5,000 companies in the dataset.
        </Typography>

        <Typography variant={section} className={classes.section}>
          Selection Criteria
        </Typography>
        <Typography variant={body} paragraph>
          The selection criteria is the net current asset strategy in its simplest form:
        </Typography>
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={11}>
            <Typography paragraph variant="overline">
                Net Current Assets = Current Assets - Total Liabilities - Preferred Shares
            </Typography>
          </Grid>
        </Grid>
        <Typography variant={body}>
          After calculating Net Current Assets, I divide by Outstanding Common Shares and compare that with the Share Price. If the Share Price is less than 66% of the Net Current Assets per Share, then the company will be selected for the portfolio.
          There are many variations of the Net Current Assets formula, complete with operating leases and discounts on Accounts Receivable and other asset classes. I know these variations exist, but to keep things simple, I’m going to use the simplest formula.
        </Typography>

        <Typography variant={section} className={classes.section}>
          Portfolio Construction and Execution
        </Typography>
        <Typography variant={body}>
          Each year on April 1st, the eligible universe will be pulled and filtered until the only companies remaining are the ones that meet Benjamin Graham’s Net Current Asset criteria. Then an equally weighted portfolio will be bought on the earliest trading day and held until March 31st of the next year. Each year’s portfolio starts with $100,000.
        </Typography>

        <Typography variant={section} className={classes.section}>
          Commissions
        </Typography>
        <Typography variant={body} paragraph>
          The commission scheme used is that of Interactive Brokers.
        </Typography>
        <Typography variant={body}>
          My first thought was not to include the impact of commissions as many brokers don’t charge them anymore for buying and selling equities. But I also know that Payment for Order Flow is definitely extracting some sort of value from investors. Even if you never use market orders and only use limit orders, it’s probable that some of your trades will not get executed when they otherwise could have been. To try and take all this into account, I include the commission for buying the equities but not for selling them. It’s like commissions are discounted by half. I’ll talk more about the impact of commissions later.
        </Typography>

        <Typography variant={section} className={classes.section}>
          Known Errors
        </Typography>
        <Typography variant={body} paragraph>
          The data is not perfect. I picked a small sample of companies and did my own verification of their financials with their SEC-filed 10-K’s and 10-Q’s. While overall I was pleasantly surprised by how accurate the financial data is, I did find some anomalies.
        </Typography>
        <Typography variant={body} paragraph>
          There seems to be a problem with how Morningstar records Total Liabilities. When the company’s balance sheet has a Total Liabilities line, it works just fine. However, when the balance sheet does not have a Total Liabilities line, the database seems to record some random number. As a result, some of the companies selected might not actually meet the criteria, and I can only assume that some companies meeting the criteria might be erroneously left out.
        </Typography>
        <Typography variant={body} paragraph>
          I also saw a case of one company that did a reverse split, but the system didn’t update the share count and price appropriately, so whoever was holding that company on the day of the split would have instantly had more than a 1200% gain. This case did not fall within the backtesting period, but there could be other split errors that snuck themselves into the backtest.
        </Typography>
        <Typography variant={body}>
          Even with the known errors, I think on average the backtest is correct, but I do plan to do more verification in the future to validate my results.
        </Typography>

        <Typography variant={section} className={classes.section}>
          Benchmark
        </Typography>
        <Typography variant={body}>
          I used the S&P 500 as measured by the SPY ETF as my benchmark. Now you could correctly argue that since most of these net net stocks are microcap that I should be using a microcap ETF, but I decided to use the S&P 500 just because it is the most popular.
        </Typography>

        <Typography variant={section} className={classes.section}>
          Data
        </Typography>
        <Button onClick={handleOpen} size="small">
          <img src={table} alt="Table" className={classes.image} />
        </Button>
        <Modal open={open} onClose={handleClose}>
          <Grid className={classes.modal}>
            <img src={table} alt="Table" className={classes.modalImage} />
          </Grid>
        </Modal>

        <Typography variant={section} className={classes.section}>
          Results
        </Typography>
        <Typography variant={body} paragraph>
          Diversification - The smallest portfolio during our backtest held 102 companies, and the largest portfolio held 509 companies. Just based on numbers alone, the portfolios were diversified, although it could be interesting one day to do a breakdown to see if any sectors stand out from the rest.
        </Typography>
        <Typography variant={body} paragraph>
          CAGR - The net net strategy had a higher CAGR over the 22-year period of 6.36% vs the SPY’s 5.71%. If you started with $100,000 on April 1, 1998, you would have almost $50,000 more on March 31, 2020 if you used the net net strategy instead of SPY. Once again, I am only assuming commissions for buying and not for selling. If you were to assume commission for both buying and selling, the CAGR would be reduced to around 6.00%. If you were to assume no commissions at all, the CAGR would be around 6.64%
        </Typography>
         <Typography variant={body} paragraph>
          Volatility - The net net strategy is much more volatile than SPY. The average drawdown over the 22-year period was almost twice as high at 29.4% vs 16.0%. The net net strategy also had negative returns in 11 out of 22 years, while SPY only had negative returns in five years. There are also years such as April 98 to March 99 and April 2014 to March 2015 where the net net strategy had a significantly negative return, but the SPY was actually up. There were no years at all in which the SPY was down, but the net net strategy was up.
        </Typography>
        <Typography variant={body}>
          Timing - The outperformance generated by the net net strategy seems to be driven by a high return early on in the year April 99 to March 2000. If you had started net net investing in April 2000 rather than April 1998, there would not have been any net net outperformance. In fact, if you had started net net investing at any time after April 2000, your performance would either be similar to SPY or significantly worse. If you had started investing in April 2006, after 14 years of investing, you would be down 17.39% overall. There is no comparable stretch in SPY investing that resulted in overall negative growth.
        </Typography>

        <Typography variant={section} className={classes.section}>
          Conclusion
        </Typography>
        <Typography variant={body} paragraph>
          While my backtest does show that Benjamin Graham’s net current asset value strategy performed better than SPY over the 22-year period of the test, the outperformance was driven by one high-return year in the beginning of the backtest. Without the return from April 99 to March 2000, the net net strategy would have performed the same or far worse than SPY while also being significantly more volatile. I would not recommend the net net strategy.
        </Typography>
        <Typography variant={body}>
          The technique of valuing a company based on net current assets has been around forever. Benjamin Graham originally developed and tested this method between 1930 and 1932. He then went on to use this method extensively while running his investment management business, the Graham-Newman Corporation, through 1956. He reported that over a 30-year period, his average return using this method was about 20% per year.
        </Typography>

        <Typography variant={section} className={classes.section}>
          Contact Me
        </Typography>
        <Contact />

      </Grid>

      <Grid item xs={1} sm={2} lg={3} />

    </Grid>
  );
}

export default App;
