import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  snackbar: {
    margin: theme.spacing.unit,
  },
});


const StreamProgress = ({_reloadTweets, _searchTweets, _query, classes}) => {
  if(_reloadTweets==='Stopped'){
    return <div>
      <SnackbarContent className={classes.snackbar}
                       message="Receiving more than 2 tweets per sec. Adjust search criteria or continue loading."
                       action={<Button color="secondary" onClick={() => _searchTweets(_query)}>Continue</Button>} />
    </div>;
  }else if(_reloadTweets==='Started'){
    return (<div><br/><LinearProgress color="primary" style={{width:650}}/></div>);
  }else{
    return <div/>;
  }
}

StreamProgress.propTypes = {
  searchTweets: PropTypes.func,
  reloadTweets: PropTypes.bool,
  query: PropTypes.shape({
    field: PropTypes.string,
    operator: PropTypes.string,
    value: PropTypes.string,
  }),
};

export default withStyles(styles)(StreamProgress);