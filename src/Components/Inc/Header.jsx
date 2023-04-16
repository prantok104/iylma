
import { NavLink } from "react-router-dom"
import Logo from "../Logo"
import Menus from "./Menus"
import {Col, Container} from '../Elements/Elements'
import { useEffect, useState } from "react"

const Header = () => {

   const [navbg, setNavbg] = useState("");

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, [])

   const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition >= 100) {
         setNavbg("nav-dark")
      } else {
         setNavbg("");
      }
   }

  return (
     <header className={`iylma-header-area-start bg-transparent ${navbg}`}>
           <div className="iylma-header-area">
           <Container>
               <Col className="col-lg-1q2 col-12 col-md-12">
                  <div className="iylma-header-content d-flex align-items-center justify-content-between">
                        <NavLink to="/" className="iylma-logo-link"><Logo className="iylma-main-logo"></Logo></NavLink>
                        <Menus />
                     </div>
               </Col>
               </Container>
           </div>
     </header>
  )
}

export default Header