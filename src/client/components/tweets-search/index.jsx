import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import EventSource from 'eventsource';
import TweetList from './tweet-list';
import { setTweets, setTweetsQuery } from '../../actions/tweets';
import Config from '../../../../config/development';


class TweetsSearch extends React.Component {

  render() {
    return (
      <div>
        <TextField
          className="search-field"
          placeholder="Tweet Query"
          onChange={(event) => this.props.setCriteria(event.target.value)}
        />

        <Button color="primary" onClick={() => this.props.searchTweets()}>Search</Button>

        <TweetList tweets={this.props.tweets} />
      </div>
    );
  }
}

const searchTweets = async (dispatch) => {
  let hostUrl = '/api/netflix/tweets';
  if (typeof window === 'undefined') {
    hostUrl = `http://0.0.0.0:${Config.port}/api/tweets`;
  }

  var source = new EventSource(hostUrl);

  source.addEventListener('tweetevent', function (message) {
    console.log('Stream connection getting data!');
    console.log('hello message-'+message);
    var data = JSON.parse(message.data);
    dispatch(setTweets({...data, id:message.lastEventId}));
  });

  source.addEventListener('open', function (message) {
    console.log('Stream connection is open!');
  });

  source.addEventListener('end', function (message) {
    console.log('Stream connection is closed!');
    this.close();
  });

  //Twitter stream
  /**

  var source = new EventSource("https://tweet-service.herokuapp.com/stream");

  source.addEventListener('message', function (message) {
    console.log('Stream connection getting data!');
    console.log('hello message-'+message);
    var data = JSON.parse(message.data);
    dispatch(setTweets({...data, id:message.lastEventId}));
  });

  source.addEventListener('open', function (message) {
    console.log('Stream connection is open!');
  });

  source.addEventListener('end', function (message) {
    console.log('Stream connection is closed!');
    this.close();
  });
  **/
  //Twitter stream

};


TweetsSearch.propTypes = {
  tweets: PropTypes.array.isRequired,
  searchTweets: PropTypes.func,
  setCriteria: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    tweets: state.tweets,
    tweetsQuery: state.tweetsQuery,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchTweets: () => searchTweets(dispatch),
    setCriteria: (query) => dispatch(setTweetsQuery(query)),
  };
}


export default{
  component: connect(mapStateToProps, mapDispatchToProps)(TweetsSearch),
};
