import { Link } from "@tanstack/react-router";

const Navigation = () => {
  return (
    <nav className="navigation" role="navigation">
      <Link to={'/'} className="logo">Untwigged</Link>
      <Link to={'/portfolio'}>Portfolios</Link>
    </nav>
  )
}

export default Navigation;