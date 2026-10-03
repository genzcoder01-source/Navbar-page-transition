import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="navbar-item">
          <Link href="/">GenZcoder</Link>
        </div>
      </div>
      <div className="navbar-items">
        <div className="navbar-item">
          <Link href="/">GenZcoder</Link>
        </div>
        <div className="navbar-item">
          <Link href="/threshold">Threshold</Link>
        </div>
        <div className="navbar-item">
          <Link href="/sanctum">Sanctum</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
