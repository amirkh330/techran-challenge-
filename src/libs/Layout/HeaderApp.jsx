import React from "react";
import { Link } from "react-router-dom";
import {withRouter} from "react-router-dom";

function HeaderApp(props) {
  
  return (
    <div className="row align-items-center justify-content-between h-100 ">
      <div className="intro">
        <h4 className="title">App Test Takran</h4>
      </div>
      <div className="">
        <Link to="/form">
          <span className={`mx-2 nav-item ${props.location.pathname==="/form" && "nav-active"}`}>New Form</span>
        </Link>
        <Link to="/table">
        <span className={`mx-2 nav-item ${props.location.pathname==="/table" && "nav-active"}`}>Data Table</span>
        </Link>
      </div>
    </div>
  );
}
export default withRouter(HeaderApp);
