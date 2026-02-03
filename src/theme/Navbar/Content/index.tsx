import React from "react";
import OriginalNavbarContent from "@theme-original/Navbar/Content";
import CardNavMenu from "@site/src/components/CardNavMenu";

export default function NavbarContent(props) {
  return (
    <>
      <CardNavMenu />
      <OriginalNavbarContent {...props} />
    </>
  );
}
