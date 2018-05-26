import React from 'react';
import PropTypes from 'prop-types';
import Tweet from './tweet';

const TweetList = ({ tweets }) => (
  <div>{tweets.map(tweet => (<Tweet key={tweet.id} tweet={tweet} />))}</div>
);

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.shape({
    tweet: PropTypes.string,
    user: PropTypes.string,
  })).isRequired,
};

export default TweetList;
