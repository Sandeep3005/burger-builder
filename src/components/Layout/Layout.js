import React from "react";
import classes from "./Layout.css";
import Toolbar from "./../Navigation/Toolbar/Toolbar";

const Layout = props => (
  <React.Fragment>
    <div>
      <Toolbar />
    </div>
    <div>ToolBar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </React.Fragment>
);

export default Layout;
