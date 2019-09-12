import React from "react";
import { NavLink } from "react-router-dom";
import { useStyles } from "./MenuStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import MyMenu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";

const Menu = () => {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <MyMenu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <Button color='inherit'>
          <NavLink exact to='/' activeClassName='active'>
            Home
          </NavLink>
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color='inherit'>
          <NavLink to='/search' activeClassName='active'>
            Search
          </NavLink>
        </Button>
      </MenuItem>
      <MenuItem>
        <Button>
          <NavLink to='/watched' activeClassName='active'>
            Watched
          </NavLink>
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color='inherit'>
          <NavLink to='/to-watch' activeClassName='active'>
            ToWatch
          </NavLink>
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color='inherit'>
          <NavLink to='/details' activeClassName='active'>
            Details
          </NavLink>
        </Button>
      </MenuItem>
    </MyMenu>
  );

  return (
    <nav className={classes.grow}>
      <AppBar position='static'>
        <Toolbar>
          <Typography className={classes.title} variant='h6' noWrap>
            movies4free
          </Typography>

          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            <Button color='inherit'>
              <NavLink exact to='/' activeClassName='active'>
                Home
              </NavLink>
            </Button>
            <Button color='inherit'>
              <NavLink to='/search' activeClassName='active'>
                Search
              </NavLink>
            </Button>
            <Button>
              <NavLink to='/watched' activeClassName='active'>
                Watched
              </NavLink>
            </Button>
            <Button color='inherit'>
              <NavLink to='/to-watch' activeClassName='active'>
                ToWatch
              </NavLink>
            </Button>
            <Button color='inherit'>
              <NavLink to='/details' activeClassName='active'>
                Details
              </NavLink>
            </Button>
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'>
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </nav>
  );
};

export default Menu;
