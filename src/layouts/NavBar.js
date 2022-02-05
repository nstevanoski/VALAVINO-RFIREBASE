import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import "./NavBar.css";

import { Link } from "react-router-dom";

const NavBar = (props) => {
  const classes = useStyles();
  const auth = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    localStorage.removeItem("user");
    props.setUserState();
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.menubackgroud}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <div className="header-name">
              <Link to="/">ВИНАРСКА ВИЗБА ВАЛАВИНО</Link>
            </div>
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
              </IconButton>
              <p className="btn btn-primary mr-2"><AccountCircle /> Вработен: {props.userEmail}</p>
              <p className="menu-logout" onClick={handleClose}>
                Одјави се
              </p>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menubackgroud: {
    background: "darkred",
  },
  title: {
    flexGrow: 1,
  },
}));

export default NavBar;
