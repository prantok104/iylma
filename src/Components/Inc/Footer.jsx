import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Col, Container, Image } from '../Elements/Elements'

export const Footer = () => {
   const publicPath = process.env.PUBLIC_URL + "/images/";
   const colorLogo  = publicPath + 'iylma_logo.png'
  return (
     <>
      <div className = 'footer-area-start'>
        <Container>
           <Col className = 'col-md-12 col-lg-12 col-sm-12 text-center'>
              <div>
                 <Image           srcName           = {colorLogo} altName                  = 'Iylma Logo' />
                 <p               className         = 'mt-2'>House 36,                       Garden Valley Matin,                  Level 03, Garib-E-Newaz Avenue, Sector 13, Uttara, Dhaka 1230, Bangladesh.</p>
                 <p><strong>Phone:</strong> <a href = "tel:+8801711407927">+880 1711407927, </a> <strong>Email:</strong> <a href = "mailto:info@iylma.com">info@iylma.com</a></p>
                 <p               className         = "social-icons">
                 <a               href              = ""><FaTwitter /></a>
                 <a               href              = "https://www.facebook.com/IYLMAinnovationltd"><FaFacebook /></a>
                 <a               href              = "https://www.linkedin.com/company/iylmainnovation/"><FaLinkedin /></a>
                 </p>
              </div>
           </Col>
        </Container>
        </div>
        <div className = "footer-bottom">
         <p className = "text-center">&copy; IYLMA Innovation Ltd. All Rights Reserved</p>
        </div>
     </>
  )
}
