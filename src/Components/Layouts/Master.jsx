import { Footer } from "../Inc/Footer"
import Header from "../Inc/Header"
const Master = ({ children }) => {
  return (
     <>
        <Header></Header>
        {children}
        <Footer></Footer>
     </>
  )
}
export default Master