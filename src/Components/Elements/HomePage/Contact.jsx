import React from 'react'
import { Space, Title } from '../Elements'

const Contact = () => {
  return (
     <>
     <Space padding = "100px 0 0 0">
     <Title space   = "0 0 50px 0" subTitle = "Stay with us" title = "Contact us" content = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."></Title>
              
              {/* Map area start */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.491552519903!2d90.38847937603263!3d23.872182184088782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79e73ac79b1%3A0x3ff80328b3bd0825!2sIYLMA%20Innovation%20Ltd.!5e0!3m2!1sen!2sbd!4v1684603662908!5m2!1sen!2sbd" width="100%" height="650"  loading="lazy" ></iframe>
              {/* Map area end */}
           </Space>
     </>
  )
}

export default Contact