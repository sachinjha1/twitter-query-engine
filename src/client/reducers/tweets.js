import initialState from './initial-state';
import { SET_TWEETS, SET_TWEETS_QUERY } from '../actions/types';

export function tweetsReducer(state = initialState.tweets, action) {
  switch (action.type) {
    case SET_TWEETS: {
      var newTweets = [...state, action.tweets];
      return newTweets;
    }
    default:
      return state;
  }
}


export function tweetsQueryReducer(state = initialState.query, action) {
  switch (action.type) {
    case SET_TWEETS_QUERY:
      return action.query;
    default:
      return state;
  }
}