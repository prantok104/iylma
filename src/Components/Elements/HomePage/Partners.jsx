import React from 'react'
import { Col, Container, Image, Space, Title } from '../Elements'

const Partners = () => {
   const publicPath = process.env.PUBLIC_URL + "/images/";
   const clientsAndPartners = [];
   for (let i = 1; i <= 27; i++){
      clientsAndPartners.push(<Col className="col-md-2" key={`partners${i}`}><Image className="partner-image" style={{ objectFit: 'contain' }} srcName={`${publicPath}/partners/${i}.png`} altName={`image${i}`} /></Col>)
   }
  return (
     <>
        <Space bgColor = "E5E2F8">
        <Title space   = "0 0 50px 0" subTitle = "Clients & Parners with IYLMA" title = "We Works with the <br/> Best Clients and Partners" content = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."></Title>
              <Container>
                {clientsAndPartners}
             </Container>
            </Space>
     </>
  )
}

export default Partners