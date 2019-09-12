import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

export default function MenuList() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton
        edge='start'
        onClick={handleClick}
        aria-controls='simple-menu'
        aria-haspopup='true'
        className={classes.menuButton}
        color='inherit'
        aria-label='open drawer'>
        <MenuIcon />
      </IconButton>

      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <NavLink exact to='/' activeClassName='active'>
            Home
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to='/search' activeClassName='active'>
            Search
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to='/watched' activeClassName='active'>
            Watched
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to='/to-watch' activeClassName='active'>
            ToWatch
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to='/details' activeClassName='active'>
            Details
          </NavLink>
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </div>
  );
}
