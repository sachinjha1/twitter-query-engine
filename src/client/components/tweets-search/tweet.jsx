import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Typography, Avatar, Grid, Badge, Tooltip } from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached';
import LanguageIcon from '@material-ui/icons/Language';
import VerifiedIcon from '@material-ui/icons/VerifiedUser';
import { DUMMY_AVATAR_IDS } from '../../constants';
import { elapsedTime } from '../../constants/utils'

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  margin: {
    margin: 4,
  },
});


const Tweet = ({ tweet, classes }) => (
  <div>
    <Card className={ classes.card }>
      <Grid container wrap="nowrap" spacing={16}>
        <Grid item xs={6}>
          <CardHeader
            avatar={
              <Avatar>
                {DUMMY_AVATAR_IDS[Math.floor(Math.random()*DUMMY_AVATAR_IDS.length)]}
              </Avatar>
            }
            title={tweet.user}
            subheader={elapsedTime(tweet.created_at)}/>
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
    verified: PropTypes.bool,
    created_at: PropTypes.number,
    retweet_count: PropTypes.number,
  }).isRequired,
};

export default withStyles(styles)(Tweet);
