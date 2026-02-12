import React, { useState } from "react";
import OriginalNavbarContent from "@theme-original/Navbar/Content";
import CardNavMenu from "@site/src/components/CardNavMenu";

export default function NavbarContent(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <OriginalNavbarContent {...props} />

        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            font: "inherit",
            padding: "6px 12px",
            marginLeft: "16px",
          }}
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
        >
          Explore
        </button>
      </div>

      <CardNavMenu open={open} setOpen={setOpen} />
    </>
  );
}
