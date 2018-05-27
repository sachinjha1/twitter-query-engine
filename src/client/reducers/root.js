import { combineReducers } from 'redux';
import { tweetsReducer as tweets, tweetsQueryReducer as query, setStreamStatusReducer as streamStatus} from './tweets';

const rootReducer = combineReducers({
  tweets,
  query,
  streamStatus,
});

export default rootReducer;
