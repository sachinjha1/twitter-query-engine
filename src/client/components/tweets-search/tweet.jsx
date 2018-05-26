import React from 'react';
import PropTypes from 'prop-types';
import { Card, Typography } from 'material-ui';

const Tweet = ({ tweet }) => (
  <div>
    <Card style={{ maxWidth: 275 }}>
      <Typography type="headline">
        <strong>{`${tweet.tweet}-${tweet.user}`}</strong>
      </Typography>
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

export default Tweet;
