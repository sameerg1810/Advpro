import React from "react";

export default function Navbar({ toggleVisible }) {

  return (
    <nav className="navbar navbar-light bg-light shadow my-2 px-3 justify-content-between">
      <a className="navbar-brand text-primary" href="https://biztyz.advertyzement.com/">Advertyzment</a>    
      <button className="btn btn-outline-primary my-2 my-sm-0" type="btn" onClick={toggleVisible}>Users data</button>
    </nav>
  );
}
