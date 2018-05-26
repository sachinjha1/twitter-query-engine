import { combineReducers } from 'redux';
import counter from './counter';
import movies from './movies';
import { tweetsReducer as tweets, tweetsQueryReducer as query} from './tweets';

const rootReducer = combineReducers({
  counter,
  movies,
  tweets,
  query,
});

export default rootReducer;
