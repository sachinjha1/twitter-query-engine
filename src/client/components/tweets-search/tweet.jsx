import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Typography, Avatar, Grid, Badge, Tooltip } from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached';
import LanguageIcon from '@material-ui/icons/Language';
import VerifiedIcon from '@material-ui/icons/VerifiedUser';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  margin: {
    margin: 4,
  },
});

let userIds = ['AB','BC','CD','DE','EF','GH','IJ','JK'];

const Tweet = ({ tweet, classes }) => (
  <div>
    <Card className={ classes.card }>
      <Grid container wrap="nowrap" spacing={16}>

        <Grid item xs={6}>
          <CardHeader
            avatar={
              <Avatar>
                {userIds[Math.floor(Math.random()*userIds.length)]}
              </Avatar>
            }
            title='@user-32'
            subheader={fromTime(tweet.created_at)}/>
        </Grid>

        <Grid item xs={6}>
          <Typography type="Subheading">
            {tweet.tweet.slice(0,tweet.tweet.indexOf('#'))}
          </Typography>
          <Typography type="Headline" color='error'>
            <strong>{tweet.tweet.slice(tweet.tweet.indexOf('#'),tweet.tweet.length)}</strong>
          </Typography>
        </Grid>

      </Grid>
      <Grid container wrap="nowrap" spacing={16}>
        <Grid item xs={6}/>
        <Grid item xs={6}>
          <Tooltip title='Retweet' placement="top">
            <Badge className={classes.margin} badgeContent={tweet.retweet_count} color="default">
              <CachedIcon color='disabled'/>
            </Badge>
          </Tooltip>
          <Tooltip title='Language' placement="top">
            <Badge className={classes.margin} badgeContent={tweet.lang} color="default">
              <LanguageIcon color='disabled'/>
            </Badge>
          </Tooltip>
          <Tooltip title='Verified' placement="top">
            <Badge className={classes.margin} badgeContent={''} color="default">
             {tweet.verified === true?<VerifiedIcon color='disabled'/>:''}
            </Badge>
          </Tooltip>
        </Grid>
      </Grid>
    </Card>
    <br />
  </div>
);

Tweet.propTypes = {
  tweet: PropTypes.shape({
    tweet: PropTypes.string,
    user: PropTypes.string,
  }).isRequired,
};

function fromTime(previous) {
  let current = new Date();
  let msPerMinute = 60 * 1000;
  let msPerHour = msPerMinute * 60;
  let msPerDay = msPerHour * 24;
  let msPerMonth = msPerDay * 30;
  let msPerYear = msPerDay * 365;

  let elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed/1000) + ' sec';
  }

  else if (elapsed < msPerHour) {
    return Math.round(elapsed/msPerMinute) + ' min';
  }

  else if (elapsed < msPerDay ) {
    return Math.round(elapsed/msPerHour ) + ' hr';
  }

  else if (elapsed < msPerMonth) {
    return 'approximately ' + Math.round(elapsed/msPerDay) + ' d';
  }

  else if (elapsed < msPerYear) {
    return 'approximately ' + Math.round(elapsed/msPerMonth) + ' mo';
  }

  else {
    return 'approximately ' + Math.round(elapsed/msPerYear ) + ' yr';
  }
}

export default withStyles(styles)(Tweet);
