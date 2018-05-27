import React from 'react';
import PropTypes from 'prop-types';
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";

const TweetQuery = ({_setTweetsQueryField, _setTweetsQueryOperator, _setTweetsQueryValue, _searchTweets, _query}) => (
  <div>
    <TextField
      className="search-field"
      placeholder="Field"
      onChange={(event) => _setTweetsQueryField(event.target.value)}
    />
    <TextField
      className="search-field"
      placeholder="Operator"
      onChange={(event) => _setTweetsQueryOperator(event.target.value)}
    />
    <TextField
      className="search-field"
      placeholder="Value"
      onChange={(event) => _setTweetsQueryValue(event.target.value)}
    />
    <Button color="primary" onClick={() => _searchTweets(_query)}>Search</Button>
  </div>
);

TweetQuery.propTypes = {
  query: PropTypes.shape({
    field: PropTypes.string,
    operator: PropTypes.string,
    value: PropTypes.string,
  }),
};

export default TweetQuery;
