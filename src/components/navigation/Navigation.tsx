import { Link } from "@tanstack/react-router";

const Navigation = () => {
  return (
    <div className="navigation">
      <h1 className="logo">Untwigged</h1>
      <div className="navigation__links">
        <Link to={'/'}>Home</Link>
        <Link to={'/portfolio'}>Portfolio</Link>
      </div>
    </div>
  )
}

export default Navigation;