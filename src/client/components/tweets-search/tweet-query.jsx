import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from "@material-ui/core/Button";

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


const FIELDS = [
  {
    value: 'tweet',
    label: 'Tweet',
  },
  {
    value: 'user',
    label: 'User',
  },
  {
    value: 'retweet_count',
    label: 'Retweet Count',
  },
  {
    value: 'created_at',
    label: 'Created At',
  },
  {
    value: 'verified',
    label: 'Verified',
  },
  {
    value: 'lang',
    label: 'Language',
  },
];

const OPERATORS = [
  {
    value: 'equals',
    label: 'Equals',
  },
  {
    value: 'contains',
    label: 'Contains (case insensitive)',
  },
  {
    value: 'regex',
    label: 'Regex',
  },
];
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
      {FIELDS.map(option => (
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
      {OPERATORS.map(option => (
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
  query: PropTypes.shape({
    field: PropTypes.string,
    operator: PropTypes.string,
    value: PropTypes.string,
  }),
};

export default withStyles(styles)(TweetQuery);

