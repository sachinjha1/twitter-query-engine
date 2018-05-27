import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit,
  },
});


const ReloadTweet = ({_reloadTweets, _searchTweets, _query, classes}) => {
  if(_reloadTweets){
    return <div>
      <Button color="primary" onClick={() => _searchTweets(_query)}>Reload</Button>
      <SnackbarContent className={classes.snackbar} message="Continue loading...?" action={<Button color="secondary" onClick={() => _searchTweets(_query)}>Continue</Button>} />
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

export default withStyles(styles)(ReloadTweet);