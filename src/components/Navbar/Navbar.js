import React, { Component } from "react";
import { Grid, ListItem } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import * as c from "../../utils/constants/constants";

class Navbar extends Component {
  state = {
    value: 0,
    mobile: "",
    anchorEl: null,
  };
  componentDidMount() {}

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
   // let tab = window.location.href.toString().split("/")[3];
    const classes = "doc-route tabs";
    let { changeCurrentPage } = this.props;
    return (
      <div className="nav-bar">
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
      </div>
    );
  }
}

export default Navbar;
