import PropTypes from 'prop-types'

export const Elements = () => {
  return (
    <div>Elements</div>
  )
}

        /***
 * Image Component
 * @return icon, className, padding, margin, bgColor
 */
export const Icon = ({icon, className, padding, margin, bgColor}) => {
  return (
     <>
        <span className = {className} style = {{ padding: padding, margin: margin, background: bgColor }}>{ icon }</span>
     </>
  )
}
Icon.defaultProps = {
   bgColor :  "#175CFF"
}

        /***
 * Image Component
 * @return className, srcName, altName
 */
export const Image = ({ className, srcName, altName }) => {
  return (
     <img className = { className } src = {srcName} alt = {altName} />
  )
}
Image.propTypes = {
   srcName :  PropTypes.string.isRequired,
   altName :  PropTypes.string.isRequired,
}


        /***
 * Space Component
 * @return  image, position, className, padding, margin, bgColor
 */
export const Space = ({className, padding,image,position,bgColor,children}) => {
  return (
     <section className = {className} style = {{ padding: padding, backgroundImage: `url(${image}) ${position}`, backgroundColor: `#${bgColor}`  }}>{ children }</section>
  )
}
Space.defaultProps = {
   padding   :  "100px 0",
   bgColor   :  "ffffff",
   className :  ""
}


        /***
 * Space Component
 * @return  subTitle, subTitleColor, title, titleColor, content, contentColor, space
 */
export const Title = ({ subTitle, subTitleColor, title, titleColor, content, contentColor, space }) => {
  return (
     <div className = "iylma-title-area text-center" style = {{ padding: space }}>
        {(subTitle !== '' ? <span style={{ color: subTitleColor[0], borderColor: subTitleColor[1], background: subTitleColor[2]  }}>{subTitle}</span> : '')}
        <h1 dangerouslySetInnerHTML = {{ __html: title }} style = {{ color: titleColor  }}></h1>
        <p  style                   = {{ color: contentColor }}>{ content }</p>
    </div>
  )
}
Title.defaultProps = {
   title         :  "Title",
   titleColor    :  "#000",
   contentColor  :  "#000",
   content       :  "Content",
   subTitleColor :  ["#1909F4", "#d4d1ff", "#eeecff"]
}
Title.propTypes = {
   title   :  PropTypes.string.isRequired,
   content :  PropTypes.string.isRequired
}

        /***
 * Container Component
 * @return  className, children
 */
export const Container = ({ className, children }) => {
  return (
     <div className = {className}>
     <div className = "row">
           {children}
        </div>
     </div>
  )
}
Container.defaultProps = {
   className :  'container'
};

        /***
 * Col Component
 * @return  className, children
 */
export const Col = ({ className, children }) => {
  return (
     <div className = {className}>{children}</div>
  )
}
Col.defaultProps = {
   className :  "col-lg-4",
}


export const Breadcrumbs = ({ pageName }) => {
   return (
      <Space bgColor="233051" padding="150px 0 100px 0">
         <Container>
            <Col className="col-lg-12 col-md-12 col-sm-12">
               <div className="breadcrumb-area-start text-center text-white"><h1>{ pageName}</h1></div>
            </Col>
         </Container>
      {pageName}
      </Space>
   )
}