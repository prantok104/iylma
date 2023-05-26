import { NavLink, useLocation } from "react-router-dom"
const Menus = () => {
   const location = useLocation();
  return (
     <nav className="iylma-primary-menu-area">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/creative-supports">Creative supports</NavLink>
        <NavLink to="/solutions">Solutions</NavLink>
        <NavLink to="/clients">Client & Partners</NavLink>
        <NavLink to="/contact" style={{ background: location.pathname === '/' ? 'linear-gradient(90deg, rgb(26 0 243) 0%, rgb(0 206 253) 100%)' : 'linear-gradient(90deg, rgb(26 0 243) 0%, rgb(0 206 253) 100%)' }}>Contact us</NavLink>
     </nav>
  )
}

export default Menus