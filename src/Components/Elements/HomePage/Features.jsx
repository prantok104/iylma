import React from 'react'
import Tilt from "react-vanilla-tilt"
import { FaBolt, FaCode, FaShieldAlt, FaUsers, FaFingerprint, FaReact, FaClock } from "react-icons/fa"
import { Col, Container, Icon, Space, Title, Image } from '../Elements'
import SingleFeature from './SingleFeature'
const Features = () => {
      const publicPath = process.env.PUBLIC_URL + "/images/";
  return (
     <>
      <Space bgColor = "233051">
      <Title space   = "0 0 50px 0" subTitleColor = {["#cdcbcb", "#344a83", "#344a83"]} subTitle = "Features of Company" title = "With all the Features <br /> You Need." titleColor = "#fff" content = "Credibly grow premier ideas rather than bricks-and-clicks strategic theme areas distributed for stand-alone web-readiness." contentColor = "#cdcbcb"></Title>

              <Container>
                 <Col className="col-md-5">
                    <Tilt className="p-0 m-0 tilt">
                           <Image className="w-100" srcName={publicPath + "features.png"} altName="Feature Image" />
                    </Tilt>
                 </Col>
                 <Col           className = "col-md-7">
                 <div           className = "row">
                 <Col           className = "col-md-6">
                 <SingleFeature className = "text-white p-3 rounded border-1 iylma-single-feature d-flex" title = "Good Performance" content = "Appropriately grow competitive leadership rather than strategic technically" bgColor = "rgb(255 107 53 / 20%)">
                 <Icon          icon      = {<FaBolt />}  bgColor                                               = "#FF6B35"></Icon>
                          </SingleFeature>
                       </Col>
                       <Col className="col-md-6">
                          <SingleFeature className="text-white p-3 rounded border-1 iylma-single-feature d-flex" title="Highly Secure" content="Appropriately grow competitive leadership rather than strategic technically" bgColor="rgb(116 181 27 / 20%)">
                             <Icon icon={<FaShieldAlt />} bgColor="#74B51B"></Icon>
                          </SingleFeature>
                       </Col>
                       <Col className="col-md-6">
                          <SingleFeature className="text-white p-3 rounded border-1 iylma-single-feature d-flex" title="Fast Development" content="Appropriately grow competitive leadership rather than strategic technically" bgColor="rgb(253 173 0 / 20%)">
                             <Icon icon={<FaCode />} bgColor="#FDAD00"></Icon>
                          </SingleFeature>
                       </Col>
                       <Col className="col-md-6">
                          <SingleFeature className="text-white p-3 rounded border-1 iylma-single-feature d-flex" title="Customer Aanalysis" content="Appropriately grow competitive leadership rather than strategic technically" bgColor="rgb(98 77 227 / 20%)">
                             <Icon icon={<FaUsers />} bgColor="#624DE3"></Icon>
                          </SingleFeature>
                       </Col>
                       <Col className="col-md-6">
                          <SingleFeature className="text-white p-3 rounded border-1 iylma-single-feature d-flex" title="Real Time Metrics" content="Appropriately grow competitive leadership rather than strategic technically">
                             <Icon icon={<FaFingerprint />}></Icon>
                          </SingleFeature>
                       </Col>
                       <Col className="col-md-6">
                          <SingleFeature className="text-white p-3 rounded border-1 iylma-single-feature d-flex" title="Product Prototyping" content="Appropriately grow competitive leadership rather than strategic technically" bgColor="rgb(46 189 89 / 20%)">
                             <Icon icon={<FaReact />} bgColor="#2EBD59"></Icon>
                          </SingleFeature>
                       </Col>
                    </div>
                 </Col>
                 
                  <Col className="col-md-6">
                     <SingleFeature className="text-white p-3 rounded border-1 iylma-single-feature d-flex" title="Get real time updated anytime." content="Utilize your software data Progressively reinvent models and niche revolutionary benefits for integrated niches. Appropriately grow competitive leadership rather than strategic technically" bgColor="rgb(246 152 51 / 20%)">
                        <Icon icon={<FaClock />}  bgColor="#F69833"></Icon>
                     </SingleFeature>
                 </Col>

                  <Col className="col-md-6">
                     <SingleFeature className="text-white p-3 rounded border-1 iylma-single-feature d-flex" title="Utilize your software data." content="Progressively reinvent models and niche revolutionary benefits for integrated niches. Appropriately grow competitive leadership rather than strategic technically" bgColor="rgb(54 197 240 / 20%)">
                        <Icon icon={<FaBolt />}  bgColor="#36C5F0"></Icon>
                     </SingleFeature>
                 </Col>
                 
              </Container>
           </Space>
     </>
  )
}

export default Features