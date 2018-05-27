import initialState from './initial-state';
import { SET_TWEETS, RELOAD_TWEETS, CLEAR_TWEETS, SET_TWEETS_QUERY_FIELD, SET_TWEETS_QUERY_OPERATOR, SET_TWEETS_QUERY_VALUE } from '../actions/types'

export function tweetsReducer(state = initialState.tweets, action) {
  switch (action.type) {
    case SET_TWEETS: {
      var newTweets = [action.tweets, ...(state.slice(0,9))];
      return newTweets;
    }
    case CLEAR_TWEETS: return [];
    default:
      return state;
  }
}


export function tweetsQueryReducer(state = initialState.query, action) {
  switch (action.type) {
    case SET_TWEETS_QUERY_FIELD:
      return {...state,field:action.field};
    case SET_TWEETS_QUERY_OPERATOR:
      return {...state,operator:action.operator};
    case SET_TWEETS_QUERY_VALUE:
      return {...state,value:action.value};
    default:
      return state;
  }
}


export function reloadTweetsReducer(state = false, action) {
  switch (action.type) {
    case RELOAD_TWEETS:
      return action.reloadTweets;
    default:
      return state;
  }
}

