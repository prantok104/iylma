import React from "react"
import Master from "../Layouts/Master"
import Sliders from "../Elements/HomePage/Sliders"
import {Title, Space, Container, Col, Image, Icon} from "../Elements/Elements"
import AboutContent from "../Elements/HomePage/AboutContent"
import Think from "../Elements/HomePage/Think"
import Features from "../Elements/HomePage/Features"
import { Support } from "../Elements/HomePage/Support"
import Mission from "../Elements/HomePage/Mission"
import Solutions from "../Elements/HomePage/Solutions"
import Partners from "../Elements/HomePage/Partners"
import Contact from "../Elements/HomePage/Contact"
export const AboutContext = React.createContext();
const HomePage = () => {
   const publicPath = process.env.PUBLIC_URL + "/images/";
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
           <Features />
           {/* Features area end */}


           {/* Think area start */}
           <Think />
           {/* Think area end */}

           {/* Creative Support area start */}
           <Support />
           {/* Creative Support area end */}

           
           {/* Mission area start */}
           <Mission/>
           {/* Mission area end */}


            {/* Solutions area start */}
           <Solutions />
           {/* Solutions area end */}


           {/* Partners area start */}
           <Partners />
           {/* Partners area end */}

           {/* Contact area start */}
           <Contact />
           {/* Contact area end */}
         </Master>
     </>
  )
}

export default HomePage