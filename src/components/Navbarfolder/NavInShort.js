import React from "react";
import "./NavInshort.css";
import LeftDrawer from "./LeftDrawer";

const NavInShort = ({setCategory}) => {
  return (
    <div className="nav">
      <div className="icons">
       <LeftDrawer  setCategory={setCategory }/>
      </div>

      <img
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        height="71px"
        alt="pic not load"
      />
    </div>
  );
};

export default NavInShort;
