import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { OPTIONS_FIELDS, OPTIONS_OPERATORS } from '../../constants';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
});


const TweetQuery = ({_setTweetsQueryField, _setTweetsQueryOperator, _setTweetsQueryValue, _searchTweets, _query, classes}) => (
  <div>
  <form className={classes.container} noValidate autoComplete="off">

    <TextField
      id="field"
      required
      select
      label="Field"
      className={classes.textField}
      value={_query.field}
      onChange={(event) => _setTweetsQueryField(event.target.value)}
      SelectProps={{
        native: true,
        MenuProps: {
          className: classes.menu,
        },
      }}
      helperText="Please select your field type"
      margin="normal"
    >
      {OPTIONS_FIELDS.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </TextField>

    <TextField
      id="operator"
      required
      select
      label="Operator"
      className={classes.textField}
      value={_query.operator}
      onChange={(event) => _setTweetsQueryOperator(event.target.value)}
      SelectProps={{
        native: true,
        MenuProps: {
          className: classes.menu,
        },
      }}
      helperText="Please select your operator type"
      margin="normal"
    >
      {OPTIONS_OPERATORS.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </TextField>

    <TextField
      id="value"
      required
      label="Value"
      className={classes.textField}
      value={_query.value}
      onChange={(event) => _setTweetsQueryValue(event.target.value)}
      helperText="Please select your field's value"
      margin="normal"
    />

    </form>
    <Button variant="raised" color="primary" className={classes.button} onClick={() => _searchTweets(_query)}>Start Streaming</Button>
   </div>
);

TweetQuery.propTypes = {
  _query: PropTypes.shape({
    field: PropTypes.string,
    operator: PropTypes.string,
    value: PropTypes.string,
  }),
  _setTweetsQueryField: PropTypes.func,
  _setTweetsQueryOperator: PropTypes.func,
  _setTweetsQueryValue: PropTypes.func,
  _searchTweets: PropTypes.func,
};

export default withStyles(styles)(TweetQuery);

