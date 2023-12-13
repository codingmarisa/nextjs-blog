import React from 'react';
import Nav from './Nav';
import SkipLink from './SkipLink';
import SocialLinks from './SocialLinks';

export default function Header() {
  return (
    <header role="banner">
      <SkipLink />
      <Nav />
      <SocialLinks />
    </header>
  );
}
