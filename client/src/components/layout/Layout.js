import React from 'react';
import TopBar from './TopBar.js';
function Layout(props) {
    return (
    <React.Fragment>
      <TopBar />
      {props.children}
        {/*<Footer/>*/}
    </React.Fragment>
  );
}

export default Layout;