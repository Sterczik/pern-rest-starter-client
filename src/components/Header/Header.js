import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authActions } from '../../containers/App/auth/actions';

export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null
    }
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, logout } = this.props;

    return (
      <header className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.grow} variant="title" color="inherit">
              <Link to="/todos" className={classes.link}>
                Starter
              </Link>
            </Typography>
            <IconButton
              aria-owns={this.state.anchorEl ? 'menu-appbar' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}><Link to="/todos">Todos</Link></MenuItem>
              <MenuItem onClick={this.handleClose}><Link to="/my-account">My account</Link></MenuItem>
              <MenuItem onClick={this.handleClose} onClick={logout}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(authActions.logout())
});

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(undefined, mapDispatchToProps)(withStyles(styles)(Header));
