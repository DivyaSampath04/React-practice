import React, { Component } from "react";
import {
  Grid,
  ListItem,
  MenuItem,
  Button,
  Menu,
  Paper,
  Divider,
} from "@material-ui/core";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import * as c from "../../utils/constants/constants";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

class Navbar extends Component {
  state = {
    value: 0,
    mobile: "",
    sub: null,
    sec: null,
    site: null,
    ds: null,
  };
  componentDidMount() {}

  handleClick = (event, tab) => {
    if (tab === "sub") this.setState({ sub: event.currentTarget });
    else if (tab === "sec") this.setState({ sec: event.currentTarget });
    else if (tab === "site") this.setState({ site: event.currentTarget });
    else if (tab === "ds") this.setState({ ds: event.currentTarget });
  };

  handleClose = (tab) => {
    if (tab === "sub") this.setState({ sub: null });
    else if (tab === "sec") this.setState({ sec: null });
    else if (tab === "site") this.setState({ site: null });
    else if (tab === "ds") this.setState({ ds: null });
  };

  render() {
    //let tab = window.location.href.toString().split("/")[3];
    const classes = "doc-route tabs";
    let { changeCurrentPage } = this.props;
    return (
      <div className="nav-bar">
        <div className="only-flex" style={{ width: "100%" }}>
          <div className="prod-bg">
            <p className="prod-name">
              Advanced Construction Monitoring and Analysis
            </p>
          </div>
          <div className="vertical-line"></div>
          <div className="only-flex" style={{ width: "58%" }}>
            {/* <NavLink
          exact
          to={c.PAGE_URLS[c.PAGE_STAFF]}
          className="headLinkStyle"
        
        >
          <ListItem style={{ display: "grid" }}>
            <p className="tab-text">Site</p>
        
          </ListItem>
        </NavLink>
        <NavLink
          exact
          to={c.PAGE_URLS[c.PAGE_STAFF]}
          className="headLinkStyle"
        
        >
          <ListItem style={{ display: "grid" }}>
            <p className="tab-text">Data Sources</p>
        
        </ListItem>
        </NavLink>
       <NavLink
          exact
          to={c.PAGE_URLS[c.PAGE_STAFF]}
          className="headLinkStyle"
        
        >
          <ListItem style={{ display: "grid" }}>
            <p className="tab-text">Staff Management</p>
            <div className="under-line"></div>
        
        </ListItem>
        </NavLink>
        <NavLink
          exact
          to={c.PAGE_URLS[c.PAGE_STAFF]}
          className="headLinkStyle"
        
        >
          <ListItem style={{ display: "grid" }}>
            <p className="tab-text">Security</p>
        
        </ListItem>
       </NavLink>*/}
            <div className="menu-holder">
              <p
                className="tab-text"
                onClick={(event) => this.handleClick(event, "site")}
              >
                Site
              </p>
              <Menu
                // name = 'sec'
                id="simple-menu3"
                sec={this.state.site}
                keepMounted
                onClose={() => this.handleClose("site")}
                open={Boolean(this.state.site)}
              >
                <Link to="/">
                  <MenuItem>Dashboard</MenuItem>
                </Link>

                <Link to="/">
                  <MenuItem>Visuals</MenuItem>
                </Link>
                <Link to="/">
                  <MenuItem>Tickets</MenuItem>
                </Link>
              </Menu>
            </div>
            <div className="menu-holder">
              <p
                className="tab-text"
                onClick={(event) => this.handleClick(event, "ds")}
              >
                Data Sources
              </p>
              <Menu
                // name = 'sec'
                id="simple-menu4"
                sec={this.state.ds}
                keepMounted
                onClose={() => this.handleClose("ds")}
                open={Boolean(this.state.ds)}
              >
                <Link to="/">
                  <MenuItem>Image Datasets</MenuItem>
                </Link>
              </Menu>
            </div>
            <div className="menu-holder">
              <p
                className="tab-text"
                onClick={(event) => this.handleClick(event, "sub")}
              >
                Subscription
              </p>

              <Menu
                //name = 'sub'
                id="simple-menu1"
                sub={this.state.sub}
                keepMounted
                onClose={() => this.handleClose("sub")}
                open={Boolean(this.state.sub)}
              >
                <Link to="">
                  <MenuItem>Accounts</MenuItem>
                </Link>

                <Link to="">
                  <MenuItem>Projects</MenuItem>
                </Link>
                <Link to="/staff">
                  <MenuItem>Staff</MenuItem>
                </Link>
                <Link to="">
                  <MenuItem>Pilots</MenuItem>
                </Link>
              </Menu>
            </div>
            <div className="menu-holder">
              <p
                className="tab-text"
                onClick={(event) => this.handleClick(event, "sec")}
              >
                Security
              </p>
              <Menu
                // name = 'sec'
                id="simple-menu2"
                sec={this.state.sec}
                keepMounted
                onClose={() => this.handleClose("sec")}
                open={Boolean(this.state.sec)}
              >
                <Link to="/">
                  <MenuItem>Users</MenuItem>
                </Link>

                <Link to="/">
                  <MenuItem>Audit Log</MenuItem>
                </Link>
              </Menu>
            </div>
          </div>
          <div className="flex-text-icon">
            <NavLink
              exact
              to={c.PAGE_URLS[c.PAGE_STAFF]}
              className="headLinkStyle"
            >
              <ListItem style={{ display: "grid" }}>
                <AccountCircleIcon
                  fontSize="large"
                  style={{ color: "white" }}
                />
              </ListItem>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
