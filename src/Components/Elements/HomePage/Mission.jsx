import React from 'react'
import { NavLink } from 'react-router-dom'
import { Col, Container, Image, Space } from '../Elements'

const Mission = () => {
   const publicPath   = process.env.PUBLIC_URL + "/images/";
   const meetingImage = publicPath + 'meeting.png';
  return (
     <>
       <Space bgColor = "E5E2F8" padding = "40px 0">
              <Container>
                 <Col className="col-md-12 col-lg-12">
                    <div className="iylma-think-contents">
                       <div className="iylma-think-content">
                          <h1>BUSINESS <span>TECHNOLOGY</span> <br /> MADE SIMPLE!</h1>
                          <p>Our mission is to simplify, stabilize, and enhance your business through the power of technology.</p>
                          <NavLink to="/about" className="iylma-btn-radius">Go Solutions</NavLink> 
                       </div>
                       <Image srcName={meetingImage} altName="Think in a next level" />
                     </div>
                 </Col>
              </Container>
           </Space>
     </>
  )
}

export default Mission