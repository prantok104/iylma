import {Container, Col} from "../Elements"
import Typer from 'react-typed'
import { NavLink } from "react-router-dom"
const Sliders = () => {
  return (
     <section className="iylma-sliders-area">
        <Container>
           <Col className="col-md-12 col-lg-12 col-12">
              <div className="iylma-slider-area">
                     <h1>Accelerate your digital <span><Typer strings={['transformation.', 'services.', 'Product.', 'Asset.']} typeSpeed={50} backSpeed={60} loop /></span>      </h1>
                 <p>We work with latest technologies to accelerate your digital transformation.</p>
                 <NavLink to="/about" className="iylma-btn-radius">Learn More</NavLink> 
               </div>
           </Col>
        </Container>
     </section>
  )
}

export default Sliders