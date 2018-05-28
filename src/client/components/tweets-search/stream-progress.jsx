import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import { STREAM_STATUS_STARTED, STREAM_STATUS_STOPPED } from '../../constants';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  snackbar: {
    margin: theme.spacing.unit,
  },
});


const StreamProgress = ({_streamStatus, _searchTweets, _query, classes}) => {
  if(_streamStatus===STREAM_STATUS_STOPPED){
    return <div>
      <SnackbarContent className={classes.snackbar}
                       message="Receiving more than 2 tweets per sec. Adjust above criteria or continue"
                       action={<Button variant="raised" color="secondary" onClick={() => _searchTweets(_query)}>Continue</Button>} />
    </div>;
  }else if(_streamStatus===STREAM_STATUS_STARTED){
    return (<div><br/><LinearProgress color="primary" style={{width:650}}/></div>);
  }else{
    return <div/>;
  }
}

StreamProgress.propTypes = {
  _searchTweets: PropTypes.func,
  streamStatus: PropTypes.string,
  _query: PropTypes.shape({
    field: PropTypes.string,
    operator: PropTypes.string,
    value: PropTypes.string,
  }),
};

export default withStyles(styles)(StreamProgress);