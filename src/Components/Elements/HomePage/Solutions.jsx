import React from 'react'
import { FaBuromobelexperte, FaDatabase, FaPenNib, FaSms, FaUsers } from 'react-icons/fa'
import { GiBookPile, GiCalculator, GiHospitalCross } from 'react-icons/gi'
import { Col, Container, Icon, Space, Title } from '../Elements'
import SingleFeature from './SingleFeature'
import Tilt from "react-vanilla-tilt"

const Solutions = () => {
  return (
     <>
      <Space bgColor = "233051">
      <Title space   = "0 0 50px 0" subTitleColor = {["#cdcbcb", "#344a83", "#344a83"]} subTitle = "Our Solutions" title = "With all the Solutions <br /> You Need." titleColor = "#fff" content = "Credibly grow premier ideas rather than bricks-and-clicks strategic theme areas distributed for stand-alone web-readiness." contentColor = "#cdcbcb"></Title>

              <Container>
                 <Col>
                    <Tilt          className = "p-0 m-0 tilt">
                    <SingleFeature bgColor   = "rgb(103 77 243 / 16%)" className = "text-white p-3 rounded border-1 iylma-single-feature d-block" title = "Attendance & Office Management System" content = "Appropriately grow competitive leadership rather than strategic technically" >
                    <Icon          icon      = {<FaBuromobelexperte />}  bgColor = "#674DF3" className                                                  = "mb-4"></Icon>
                      </SingleFeature>
                   </Tilt>
                 </Col>
                 <Col>
                    <Tilt          className = "p-0 m-0 tilt">
                    <SingleFeature bgColor   = "rgb(116 181 27/ 16%)" className = "text-white p-3 rounded border-1 iylma-single-feature d-block" title = "Bulk SMS Solutions" content = "Appropriately grow competitive leadership rather than strategic technically" >
                    <Icon          icon      = {<FaSms />}  bgColor             = "#74B51B" className                                                  = "mb-4"></Icon>
                      </SingleFeature>
                   </Tilt>
                 </Col>
                 <Col>
                    <Tilt          className = "p-0 m-0 tilt">
                    <SingleFeature bgColor   = "rgb(54 197 240 / 16%)" className = "text-white p-3 rounded border-1 iylma-single-feature d-block" title = "Hospital Management System" content = "Appropriately grow competitive leadership rather than strategic technically" >
                    <Icon          icon      = {<GiHospitalCross />}  bgColor    = "#36C5F0" className                                                  = "mb-4"></Icon>
                      </SingleFeature>
                   </Tilt>
                 </Col>
                 <Col>
                    <Tilt          className = "p-0 m-0 tilt">
                    <SingleFeature bgColor   = "rgb(255 107 53 / 16%)" className = "text-white p-3 rounded border-1 iylma-single-feature d-block" title = "ERP System" content = "Appropriately grow competitive leadership rather than strategic technically" >
                    <Icon          icon      = {<FaDatabase />}  bgColor    = "#FF6B35" className                                                  = "mb-4"></Icon>
                      </SingleFeature>
                   </Tilt>
                 </Col>
                 <Col>
                    <Tilt          className = "p-0 m-0 tilt">
                    <SingleFeature bgColor   = "rgb(23 92 255/ 16%)" className = "text-white p-3 rounded border-1 iylma-single-feature d-block" title = "Accounting Software" content = "Appropriately grow competitive leadership rather than strategic technically" >
                    <Icon          icon      = {<GiCalculator />}  bgColor    = "#175CFF" className                                                  = "mb-4"></Icon>
                      </SingleFeature>
                   </Tilt>
                 </Col>
                 <Col>
                    <Tilt          className = "p-0 m-0 tilt">
                    <SingleFeature bgColor   = "rgb(116 181 27 / 16%)" className = "text-white p-3 rounded border-1 iylma-single-feature d-block" title = "Recruitment Management System" content = "Appropriately grow competitive leadership rather than strategic technically" >
                    <Icon          icon      = {<FaUsers />}  bgColor    = "#74B51B" className                                                  = "mb-4"></Icon>
                      </SingleFeature>
                   </Tilt>
                 </Col>
                 <Col className="col-md-6 col-lg-6">
                    <Tilt          className = "p-0 m-0 tilt">
                    <SingleFeature bgColor   = "rgb(237 140 34/16%)" className = "text-white p-3 rounded border-1 iylma-single-feature d-block" title = "Inventory System" content = "Appropriately grow competitive leadership rather than strategic technically" >
                    <Icon          icon      = {<GiBookPile />}  bgColor    = "#ED8C22" className                                                  = "mb-4"></Icon>
                      </SingleFeature>
                   </Tilt>
                 </Col>
                 <Col className="col-md-6 col-lg-6">
                    <Tilt          className = "p-0 m-0 tilt">
                    <SingleFeature bgColor   = "rgb(48 240 182 / 16%)" className = "text-white p-3 rounded border-1 iylma-single-feature d-block" title = "Learning Management System" content = "Appropriately grow competitive leadership rather than strategic technically" >
                    <Icon          icon      = {<FaPenNib />}  bgColor    = "#30F0B6" className                                                  = "mb-4"></Icon>
                      </SingleFeature>
                   </Tilt>
                 </Col>
              </Container>
           </Space>
     </>
  )
}

export default Solutions