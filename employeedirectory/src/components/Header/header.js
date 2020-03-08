import React from "react";
import "./style.css";

//This is setting the NavBar component and exporing it
function Header() {
  return (
  <div>
    <nav className=" navbar-expand-lg bg-dark ">
        <h1>Employee Directory</h1>
        <p className='middle'>Click on the carrots to filter by Heading or user the search box to narrow your results.</p>
       
    </nav>
  </div>   
  );
}

export default Header;
