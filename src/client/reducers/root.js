import { combineReducers } from 'redux';
import counter from './counter';
import movies from './movies';
import { tweetsReducer as tweets, tweetsQueryReducer as query, reloadTweetsReducer as reloadTweets} from './tweets';

const rootReducer = combineReducers({
  counter,
  movies,
  tweets,
  query,
  reloadTweets,
});

export default rootReducer;
