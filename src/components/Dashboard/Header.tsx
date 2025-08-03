import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div id="right">
        <Link to="/">Home</Link> {/* Sahi path: / */}
      </div>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/team">Team</Link>
      <Link to="/events">Events</Link>
    </>
  );
};

export default Header;