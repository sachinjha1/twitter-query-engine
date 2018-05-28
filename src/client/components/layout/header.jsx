import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = props => (
  <div>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="title" color="inherit">
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
