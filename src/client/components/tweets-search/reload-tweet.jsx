import React from 'react';
import PropTypes from 'prop-types';
import Button from "material-ui/Button";

const ReloadTweet = ({_reloadTweets, _searchTweets, _query}) => {
  if(_reloadTweets){
    return <div>
      <Button color="primary" onClick={() => _searchTweets(_query)}>Reload</Button>
    </div>;
  }else{
    return <div/>;
  }
}

ReloadTweet.propTypes = {
  searchTweets: PropTypes.func,
  reloadTweets: PropTypes.bool,
  query: PropTypes.shape({
    field: PropTypes.string,
    operator: PropTypes.string,
    value: PropTypes.string,
  }),
};

export default ReloadTweet;
