import React from "react";

import "./MainHeader.css";

const MainHeader = (props) =>{
    return <header className="mainheader"> {props.children}</header>;
};

export default MainHeader;