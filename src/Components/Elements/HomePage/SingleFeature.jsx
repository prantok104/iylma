import PropsType from 'prop-types'
const SingleFeature = ({title, content, children, className, bgColor}) => {
  return (
     <div className={`iylma-single-feature ` + className} style={{ background: bgColor }}>
        {children}
        <div className="feature-content">
         <h4>{title}</h4>
         <p>{ content }</p>
        </div>
    </div>
  )
}
SingleFeature.defaultProps = {
   className: "",
   bgColor: "rgb(39 65 96)"
}
SingleFeature.propsType = {
   title: PropsType.string.isRequired,
   content: PropsType.string.isRequired
}

export default SingleFeature