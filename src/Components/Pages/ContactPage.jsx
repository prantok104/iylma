import React from 'react'
import { Breadcrumbs } from '../Elements/Elements'
import Contact from '../Elements/HomePage/Contact'
import Master from '../Layouts/Master'

const ContactPage = () => {
  return (
     <Master>
        <Breadcrumbs pageName = "Contact Page" ></Breadcrumbs>
        <Contact/>
    </Master>
  )
}

export default ContactPage