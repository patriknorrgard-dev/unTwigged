import { Link } from "@tanstack/react-router";

const Navigation = () => {
  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <div style={{ display: "flex", gap: "2rem" }}>
        <Link to={'/'}>Home</Link>
        <Link to={'/portfolio'}>Portfolio</Link>
        <Link to={'/projects'}>Projects</Link>
        <Link to={'/about'}>About</Link>
      </div>
    </div>
  )
}

export default Navigation;