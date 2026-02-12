import React, { useState } from 'react';
import CardNavMenu from '@site/src/components/CardNavMenu';

export default function ExploreNavbarItem({ mobile }) {
  const [open, setOpen] = useState(false);

  if (mobile) {
    return (
      <>
        <a
          className="menu__link"
          style={{ cursor: 'pointer' }}
          onClick={() => setOpen(true)}
        >
          Explore
        </a>

        <CardNavMenu open={open} setOpen={setOpen} />
      </>
    );
  }

  // desktop version
  return <CardNavMenu open={open} setOpen={setOpen} />;
}
