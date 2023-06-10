import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return{links}( 
  <nav>
    {/* <a key="1" href="#home"></a>
    <a key="2" href="#about"></a>
    <a key="3" href="#projects"></a> */}
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#projects">projects</a>

  </nav>
  )
};

export default NavBar;
