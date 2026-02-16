import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="nav">
      <h2>SH_Home_Baking</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
