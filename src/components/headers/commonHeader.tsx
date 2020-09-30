import React, { useState } from 'react';

import CommonNavbar from '@/components/navbars/commonNavbar';

export default function header() {
  const [isMenuOpen, openMenu] = useState(false);

  function toggleMenu(): void {
    openMenu(!isMenuOpen);
  }

  return (
    <CommonNavbar
      brand={{
        size: ['50px', null, '45px'],
        src: 'http://localhost:3000/img/icon.png',
        alt: 'Bibela Kids',
      }}
      isMenuOpen={isMenuOpen}
      onClickMenu={toggleMenu}
    ></CommonNavbar>
  );
}
