import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EventSource from 'eventsource';
import Divider from '@material-ui/core/Divider';
import TweetList from './tweet-list';
import TweetQuery from './tweet-query';
import StreamProgress from './stream-progress';
import {
  setTweets, setStreamStatus, clearTweets, setTweetsQueryField, setTweetsQueryOperator,
  setTweetsQueryValue
} from '../../actions/tweets'
import { host, port } from '../../../../config';
import { MIDDLEWARE_SSE_EVENT_NAME } from '../../../shared';
import { STREAM_STATUS_STARTED, STREAM_STATUS_STOPPED, MAX_TWEETS_TO_LOAD, TWEET_SPEED_THRESHOLD } from '../../constants';

class TweetsSearch extends React.Component {
  render() {

    return (
      <div>
        <TweetQuery _setTweetsQueryField={this.props.setTweetsQueryField}
                    _setTweetsQueryOperator={this.props.setTweetsQueryOperator}
                    _setTweetsQueryValue={this.props.setTweetsQueryValue}
                    _searchTweets={this.props.searchTweets}
                    _query={this.props.query}
        />
        <Divider style={{width:650}}/>
        <StreamProgress _streamStatus={this.props.streamStatus}
                      _searchTweets={this.props.searchTweets}
                      _query={this.props.query}/>

        <TweetList tweets={this.props.tweets} />
      </div>
    );
  }
}

let source;
let tweetCount;
let startTS;

const searchTweets = async (dispatch, query) => {
  //Start Timer to capture Tweets per second speed
  startTS=new Date();
  //Clear all existing tweets from UI
  dispatch(clearTweets());
  //Mark stream status as started so that progress bar can be shown
  dispatch(setStreamStatus(STREAM_STATUS_STARTED));
  //Tweet counter starts
  tweetCount=0;

  //URL for browser
  let hostUrl = `/api/tweet/stream?field=${query.field}&operator=${query.operator}&value=${encodeURIComponent(query.value)}`;
  if (typeof window === 'undefined') {
    //URL to use from NodeJS client (Server Side rendering)
    hostUrl = `http://${host}:${port}${hostUrl}`;
  }

  //If reclicked... close the existing SSE connection
  if(source){
    source.close();
  }
  source = new EventSource(hostUrl);

  source.addEventListener(MIDDLEWARE_SSE_EVENT_NAME, function (message) {
    tweetCount++;
    let timeDiff = Math.abs(new Date()-startTS);
    let tweetsPerSec = tweetCount/Math.ceil(timeDiff/1000);
    //If streaming is faster than 2 per sec and number of captured tweets is 20 then stop the streaming
    if(tweetCount<=MAX_TWEETS_TO_LOAD || tweetsPerSec < TWEET_SPEED_THRESHOLD){
      let data = JSON.parse(message.data);
      dispatch(setTweets({...data, id: message.lastEventId}));
    }else{
      this.close();
      dispatch(setStreamStatus(STREAM_STATUS_STOPPED));
    }

  });

  source.addEventListener('open', function (message) {
  });

  source.addEventListener('end', function (message) {
    this.close();
  });

};


TweetsSearch.propTypes = {
  tweets: PropTypes.array.isRequired,
  streamStatus: PropTypes.string,
  query: PropTypes.shape({
    field: PropTypes.string,
    operator: PropTypes.string,
    value: PropTypes.string,
  }),
  searchTweets: PropTypes.func,
  setTweetsQueryField: PropTypes.func,
  setTweetsQueryOperator: PropTypes.func,
  setTweetsQueryValue: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    tweets: state.tweets,
    query: state.query,
    streamStatus: state.streamStatus,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchTweets: (query) => searchTweets(dispatch, query),
    setTweetsQueryField: (field) => dispatch(setTweetsQueryField(field)),
    setTweetsQueryOperator: (operator) => dispatch(setTweetsQueryOperator(operator)),
    setTweetsQueryValue: (value) => dispatch(setTweetsQueryValue(value)),
  };
}


export default{
  component: connect(mapStateToProps, mapDispatchToProps)(TweetsSearch),
};
