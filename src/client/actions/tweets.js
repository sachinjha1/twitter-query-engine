import * as types from './types';

export function setTweets(tweets) {
  return { type: types.SET_TWEETS, tweets };
}

export function setTweetsQuery(query) {
  return { type: types.SET_TWEETS_QUERY, query };
}

