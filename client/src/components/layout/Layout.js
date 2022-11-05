import React from "react";
import TopBar from "./TopBar.js";
function Layout(props) {
  return (
    <React.Fragment>
      <TopBar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
