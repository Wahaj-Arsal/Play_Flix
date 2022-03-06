/** @format */

import { Link } from "react-router-dom";

// Link component will actually change the url signified by the prop called "to"
const Menu = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/video">Video</Link>
    </header>
  );
};

export default Menu;
