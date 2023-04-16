import React from "react"
import Master from "../Layouts/Master"
import Sliders from "../Elements/HomePage/Sliders"
import {Title, Space, Container, Col, Image, Icon} from "../Elements/Elements"
import Tilt from "react-vanilla-tilt"
import AboutContent from "../Elements/HomePage/AboutContent"
import SingleFeature from "../Elements/HomePage/SingleFeature"
import { FaBolt, FaCode, FaShieldAlt, FaUsers, FaFingerprint, FaReact, FaClock, FaPalette, FaUikit, FaDesktop, FaVideo, FaCompress, FaShareAlt } from "react-icons/fa"
import { NavLink } from "react-router-dom"
export const AboutContext = React.createContext();
const HomePage = () => {
   const publicPath = process.env.PUBLIC_URL + "/images/";
   const thinkImage = publicPath + 'think.png';
   const meetingImage = publicPath + 'meeting.png';
   const aboutContents = {
      image: publicPath + 'about.png',
      imageName: "Iylma About Image",
      title: "High successful Sa video platform with a patented technology used by global enterprises.",
      content: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire.", 
      items: ["Bringing new IT solutions to the market", "To be included the list of the best IT solutions", "Research and Content Planing", "Publishing and Execution", "Deliver the Final Product"]
   }
  return (
     <>
        <Master>
           {/* Slider area start */}
           <Sliders></Sliders>
           {/* Slider area end */}

           {/* About area start */}
           <Space bgColor="E5E2F8">
              <Title space="0 0 50px 0" subTitle="About Company" title="Small Enough to Care Big <br /> Enough to Success." content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."></Title>

              <Container>
                 <Col className="col-md-12 mx-auto">
                    <AboutContext.Provider value={aboutContents}>
                       <AboutContent></AboutContent>
                    </AboutContext.Provider>
                 </Col>
              </Container>
           </Space>
           {/* About area end */}

           {/* Features area start */}
           <Space bgColor="233051">
              <Title space="0 0 50px 0" subTitleColor={["#cdcbcb", "#344a83", "#344a83"]} subTitle="Features of Company" title="With all the Features <br /> You Need." titleColor="#fff" content="Credibly grow premier ideas rather than bricks-and-clicks strategic theme areas distributed for stand-alone web-readiness." contentColor="#cdcbcb"></Title>

              <Container>
                 <Col className="col-md-5">
                    <Tilt className="p-0 m-0 tilt">
                           <Image className="w-100" srcName={publicPath + "features.png"} altName="Feature Image" />
                    </Tilt>
                 </Col>
                 <Col className="col-md-7">
                    <div className="row">
                       <Col className="col-md-6">
                          <SingleFeature className="text-white p-3 rounded border-1 iylma-single-feature d-flex" title="Good Performance" content="Appropriately grow competitive leadership rather than strategic technically" bgColor="rgb(255 107 53 / 20%)">
                             <Icon icon={<FaBolt />}  bgColor="#FF6B35"></Icon>
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
           {/* Features area end */}


           {/* Think area start */}
           <Space bgColor="CDDAFB" padding="0">
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
           {/* Think area end */}

           {/* Services area start */}
           <Space bgColor="091228">
              <Title space="0 0 50px 0" subTitleColor={["#cdcbcb", "#344a83", "#344a83"]} subTitle="Our Creative Support" title="With all the Supports <br /> You Need." titleColor="#fff" content="Our team of experts is dedicated to providing customized solutions that align with your business goals and objectives. We understand the importance of staying ahead in today's fast-paced business environment." contentColor="#cdcbcb"></Title>

              <Container>
                 <Col>
                    <Tilt className="p-0 m-0 tilt">
                        <SingleFeature bgColor="rgb(20 44 72)" className="text-white p-3 rounded border-1 iylma-single-feature d-block" title="Graphic Design" content="Appropriately grow competitive leadership rather than strategic technically" >
                        <Icon icon={<FaPalette />}  bgColor="#674DF3" className="mb-4"></Icon>
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
                    <Tilt className="p-0 m-0 tilt">
                       <SingleFeature bgColor="rgb(20 44 72)" className="text-white p-3 rounded border-1 iylma-single-feature d-block" title="Web Design" content="Appropriately grow competitive leadership rather than strategic technically">
                        <Icon icon={<FaDesktop />}  bgColor="#ED8C22" className="mb-4"></Icon>
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
           {/* Services area end */}

           
           {/* Think area start */}
           <Space bgColor="E5E2F8" padding="40px 0">
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
           {/* Think area end */}


            {/* Features area start */}
           <Space bgColor="233051">
              <Title space="0 0 50px 0" subTitleColor={["#cdcbcb", "#344a83", "#344a83"]} subTitle="Our Solutions" title="With all the Solutions <br /> You Need." titleColor="#fff" content="Credibly grow premier ideas rather than bricks-and-clicks strategic theme areas distributed for stand-alone web-readiness." contentColor="#cdcbcb"></Title>

              <Container>
                
              </Container>
           </Space>
           {/* Features area end */}
         </Master>
     </>
  )
}

export default HomePage