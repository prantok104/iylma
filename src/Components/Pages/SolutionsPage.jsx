import React from 'react'
import { Breadcrumbs } from '../Elements/Elements'
import Mission from '../Elements/HomePage/Mission'
import Solutions from '../Elements/HomePage/Solutions'
import Master from '../Layouts/Master'

const SolutionsPage = () => {
  return (
     <>
        <Master>
           <Breadcrumbs pageName = "Solutions Page"></Breadcrumbs>
           <Mission />
           <Solutions/>
      </Master>
     </>
  )
}

export default SolutionsPage