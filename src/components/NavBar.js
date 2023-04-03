import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const newLinks = links.map((links, index) => {
    return <a key={index} href={"#" + links}>{links}</a>
  })

  return <nav>{newLinks}</nav>;
}

export default NavBar;
