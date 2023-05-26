import React from 'react'
import { Breadcrumbs, Col, Container, Image, Space, Title, Icon } from '../Elements/Elements'
import Master from '../Layouts/Master'
import Think from '../Elements/HomePage/Think'
import Features from '../Elements/HomePage/Features'
const ServicePage = () => {
   const publicPath = process.env.PUBLIC_URL + "/images/";
  return (
    <>
      <Master>
            {/* Breadcrumb area start */}
            <Breadcrumbs pageName="Services Page"></Breadcrumbs>
            {/* Breadcrumb area end */}
        
           {/* Think area start */}
          <Think />
          {/* Think area end */}
        
           {/* Features area start */}
           <Features />
           {/* Features area end */}

      </Master>
    </>
  )
}

export default ServicePage