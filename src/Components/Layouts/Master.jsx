import Header from "../Inc/Header"
const Master = ({ children }) => {
  return (
     <>
        <Header></Header>
        {children}
     </>
  )
}
export default Master