import { NavLink, useLocation } from "react-router-dom"
const Menus = () => {
   const location = useLocation();
  return (
     <nav className="iylma-primary-menu-area">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/about">Services</NavLink>
        <NavLink to="/about">Creative supports</NavLink>
        <NavLink to="/about">Solutions</NavLink>
        <NavLink to="/about">Client & Partners</NavLink>
        <NavLink to="/about" style={{ background: location.pathname === '/' ? 'linear-gradient(90deg, rgb(26 0 243) 0%, rgb(0 206 253) 100%)' : '#47a5ff' }}>Contact us</NavLink>
     </nav>
  )
}

export default Menus