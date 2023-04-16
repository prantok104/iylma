import {Navigate, Route, Routes} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage'
const AllRoutes = () => {
  return (
     <>
        <Routes>
           <Route path="/home" element={<Navigate to="/" />} />
           <Route path="/" element={<HomePage />} />
           <Route path="/about" element={<AboutPage /> } />
        </Routes> 
     </>
  )
}

export default AllRoutes