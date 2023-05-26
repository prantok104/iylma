import React from 'react'
import { Col, Container, Icon, Space, Title } from '../Elements'
import Tilt from "react-vanilla-tilt"
import SingleFeature from './SingleFeature'
import { FaCompress, FaDesktop, FaShareAlt, FaUikit, FaVideo, FaPalette } from 'react-icons/fa'

export const Support = () => {
  return (
     <>
        <Space bgColor = "091228">
        <Title space   = "0 0 50px 0" subTitleColor = {["#cdcbcb", "#344a83", "#344a83"]} subTitle = "Our Creative Support" title = "With all the Supports <br /> You Need." titleColor = "#fff" content = "Our team of experts is dedicated to providing customized solutions that align with your business goals and objectives. We understand the importance of staying ahead in today's fast-paced business environment." contentColor = "#cdcbcb"></Title>

              <Container>
                 <Col>
                    <Tilt          className = "p-0 m-0 tilt">
                    <SingleFeature bgColor   = "rgb(20 44 72)" className = "text-white p-3 rounded border-1 iylma-single-feature d-block" title = "Graphic Design" content = "Appropriately grow competitive leadership rather than strategic technically" >
                    <Icon          icon      = {<FaPalette />}  bgColor  = "#674DF3" className                                                  = "mb-4"></Icon>
                     </SingleFeature>
                   </Tilt>
                 </Col>
                 <Col>
                    <Tilt className="p-0 m-0 tilt">
                        <SingleFeature bgColor="rgb(20 44 72)" className="text-white p-3 rounded border-1 iylma-single-feature d-block" title="UX/UI Design" content="Appropriately grow competitive leadership rather than strategic technically">
                        <Icon icon={<FaUikit />}  bgColor="#30F0B6" className="mb-4"></Icon>
                     </SingleFeature>
                   </Tilt>
                 </Col>
                 <Col>
                    <Tilt          className = "p-0 m-0 tilt">
                    <SingleFeature bgColor   = "rgb(20 44 72)" className = "text-white p-3 rounded border-1 iylma-single-feature d-block" title = "Web Design" content = "Appropriately grow competitive leadership rather than strategic technically">
                    <Icon          icon      = {<FaDesktop />}  bgColor  = "#ED8C22" className                                                  = "mb-4"></Icon>
                     </SingleFeature>
                    </Tilt>
                 </Col>
                 <Col>
                    <Tilt className="p-0 m-0 tilt">
                       <SingleFeature bgColor="rgb(20 44 72)" className="text-white p-3 rounded border-1 iylma-single-feature d-block" title="Promotional Video" content="Appropriately grow competitive leadership rather than strategic technically">
                        <Icon icon={<FaVideo />}  bgColor="#FF6B35" className="mb-4"></Icon>
                     </SingleFeature>
                    </Tilt>
                 </Col>
                 <Col>
                    <Tilt className="p-0 m-0 tilt">
                       <SingleFeature bgColor="rgb(20 44 72)" className="text-white p-3 rounded border-1 iylma-single-feature d-block" title="Motion Graphic Design" content="Appropriately grow competitive leadership rather than strategic technically">
                        <Icon icon={<FaCompress />}   className="mb-4"></Icon>
                     </SingleFeature>
                    </Tilt>
                 </Col>
                  <Col>
                     <Tilt className="p-0 m-0 tilt">
                        <SingleFeature bgColor="rgb(20 44 72)" className="text-white p-3 rounded border-1 iylma-single-feature d-block" title="Social Media Design" content="Appropriately grow competitive leadership rather than strategic technically" >
                              <Icon icon={<FaShareAlt />}  bgColor="#2EBD59" className="mb-4"></Icon>
                           </SingleFeature>
                     </Tilt>
                 </Col>
              </Container>
           </Space>
     </>
  )
}
