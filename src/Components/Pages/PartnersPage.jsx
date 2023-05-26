import React from 'react'
import { Breadcrumbs } from '../Elements/Elements'
import Partners from '../Elements/HomePage/Partners'
import Master from '../Layouts/Master'

const PartnersPage = () => {
  return (
     <>
        <Master>
           <Breadcrumbs pageName = "Clients and Partners Page"></Breadcrumbs>
           <Partners/>
      </Master>
     </>
  )
}

export default PartnersPage