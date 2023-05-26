import {Navigate, Route, Routes} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage'
import ServicePage from '../Pages/ServicePage'
import CreativeSupportsPage from '../Pages/CreativeSupportsPage'
import SolutionsPage from '../Pages/SolutionsPage'
import PartnersPage from '../Pages/PartnersPage'
import ContactPage from '../Pages/ContactPage'
const AllRoutes = () => {
  return (
     <>
        <Routes>
           <Route path = "/home" element              = {<Navigate to="/" />} />
           <Route path = "/" element                  = {<HomePage />} />
           <Route path = "/about" element             = {<AboutPage /> } />
           <Route path = "/services" element          = {<ServicePage />} />
           <Route path = "/creative-supports" element = {<CreativeSupportsPage />} />
           <Route path = "/solutions" element         = {<SolutionsPage />} />
           <Route path = "/clients" element           = {<PartnersPage/>} />
           <Route path = "/contact" element           = {<ContactPage/>} />
        </Routes> 
     </>
  )
}

export default AllRoutes