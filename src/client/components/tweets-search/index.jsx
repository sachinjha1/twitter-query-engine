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
import Config from '../../../../config/development';


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
        <StreamProgress _reloadTweets={this.props.streamStatus}
                      _searchTweets={this.props.searchTweets}
                      _query={this.props.query}/>

        <TweetList tweets={this.props.tweets} />
      </div>
    );
  }
}

let source;
let tweetCount;

const searchTweets = async (dispatch, query) => {
  console.log('SearchTweets');
  dispatch(clearTweets());
  dispatch(setStreamStatus('Started'));
  tweetCount=0;
  let hostUrl = `/api/netflix/tweets?field=${query.field}&operator=${query.operator}&value=${query.value}`;
  //let hostUrl = `/api/tweets`;
  if (typeof window === 'undefined') {
    hostUrl = `http://0.0.0.0:${Config.port}/api/tweets`;
  }

  //If reclicked... close the existing SSE connection
  if(source){
    source.close();
  }
  source = new EventSource(hostUrl);

  source.addEventListener('tweetevent', function (message) {
    console.log('Stream connection getting data!');

    tweetCount++;
    if(tweetCount<=20){
      let data = JSON.parse(message.data);
      dispatch(setTweets({...data, id: message.lastEventId}));
    }else{
      this.close();
      dispatch(setStreamStatus('Stopped'));
    }

  });

  source.addEventListener('open', function (message) {
    console.log('Stream connection is open!');
  });

  source.addEventListener('end', function (message) {
    console.log('Stream connection is closed!');
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
