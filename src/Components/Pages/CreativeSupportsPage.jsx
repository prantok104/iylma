import React from 'react'
import { Breadcrumbs } from '../Elements/Elements'
import { Support } from '../Elements/HomePage/Support'
import Master from '../Layouts/Master'

const CreativeSupports = () => {
  return (
     <>
        <Master>
           <Breadcrumbs  pageName="Creative Supports Page">
           </Breadcrumbs>

           <Support></Support>
         </Master>
     </>
  )
}

export default CreativeSupports