import * as types from './types';

export function setTweets(tweets) {
  return { type: types.SET_TWEETS, tweets };
}

export function setTweetsQueryField(field) {
  return { type: types.SET_TWEETS_QUERY_FIELD, field };
}

export function setTweetsQueryOperator(operator) {
  return { type: types.SET_TWEETS_QUERY_OPERATOR, operator };
}

export function setTweetsQueryValue(value) {
  return { type: types.SET_TWEETS_QUERY_VALUE, value };
}

export function clearTweets() {
  return { type: types.CLEAR_TWEETS };
}

export function setStreamStatus(streamStatus) {
  return { type: types.SET_STREAM_STATUS, streamStatus};
}

