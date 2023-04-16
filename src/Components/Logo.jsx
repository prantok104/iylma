import {Image} from "./Elements/Elements"

const Logo = ({ className }) => {
  return (
     <div className={className}>
        <Image srcName="https://iylma.com/wp-content/uploads/2023/02/top-logo.png" altName="Iylma Offial logo" />
     </div>
  )
}

export default Logo