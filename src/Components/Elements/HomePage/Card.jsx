import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import {FaRegCheckCircle} from 'react-icons/fa'
import {Image} from '../Elements'
// Card component
const Card = ({ className,children }) => {
   return (
     <div className={`card `+ className}>
         {children}
    </div>
   )
}
Card.defaultProps = {
   header: "",
   className: ""
}


// Card header component
const CardHeader = ({className, title, link, linkName}) => {
   return (
      <div className={`d-flex align-items-center justify-content-between card-head` + className}>
         <h1>{title}</h1>
         {(link !== '' ? <NavLink to={link}>{ linkName }</NavLink> : '')}
      </div>
   )
}
CardHeader.defaultProps = {
   className: "",
   title: "Card title",
   link: ""
}
CardHeader.propTypes = {
   title: PropTypes.string.isRequired,
}

// Card body for about area

const CardAboutBody = ({image, name, title, content, items}) => {
   return (
      <div className="iylma-about-content">
         <div className="iylma-about-image">
            {(image !== '' ? <Image className="rounded" srcName={image} altName={name} /> : '')}
         </div>
         <div className="iylma-about-contents">
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={{ __html:content }}></p>
            <ul>
                {items.map((item, index) => <li key={item+index}> <FaRegCheckCircle />{item}</li>)}
            </ul>
         </div>
      </div>
   )
}
CardAboutBody.defaultProps = {
   image: "",
   title: "About title",
   content: "About content",
}

CardAboutBody.propTypes = {
   title: PropTypes.string.isRequired,
   content: PropTypes.string.isRequired,
}
export { Card, CardHeader, CardAboutBody };
   
