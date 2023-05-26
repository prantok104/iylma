import React from 'react'
import { NavLink } from 'react-router-dom'
import { Col, Container, Image, Space } from '../Elements'

const Think = () => {
   const publicPath = process.env.PUBLIC_URL + "/images/";
   const thinkImage = publicPath + 'think.png';
  return (
     <>
       <Space bgColor = "CDDAFB" padding = "0">
              <Container>
                 <Col className="col-md-12 col-lg-12">
                    <div className="iylma-think-contents">
                       <Image srcName={thinkImage} altName="Think in a next level" />
                       <div className="iylma-think-content">
                          <h1>Take your site to <span> next level</span>At this Moment!</h1>
                          <p>Make the Right Choice for Your Future. Choose Moto!</p>
                          <NavLink to="/about" className="iylma-btn-radius">Next Level</NavLink> 
                       </div>
                     </div>
                 </Col>
              </Container>
           </Space>
     </>
  )
}

export default Think