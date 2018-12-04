import React from 'react';
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
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  logout() {
    this.handleClose();
    this.props.logout();
  }

  render() {
    return (
      <header className={this.props.classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={this.props.classes.grow} variant="headline" color="inherit">
              <Link to="/todos" className={this.props.classes.link}>
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
              <MenuItem component={Link} to="/todos">Todos</MenuItem>
              <MenuItem component={Link} to="/my-account">My account</MenuItem>
              <MenuItem onClick={this.logout}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(authActions.logout());
  }
});

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
};

export default connect(undefined, mapDispatchToProps)(withStyles(styles)(Header));
