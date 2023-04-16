import { useContext } from "react"
import {Card, CardAboutBody} from "./Card"
import { AboutContext } from "../../Pages/HomePage"
const AboutContent = () => {
  const { image, imageName, title, content, items } = useContext(AboutContext)
  return (
    <>
      <Card className="border-0 p-4 bg-white rounded iylma-card">
        <CardAboutBody image={image} name={imageName} title={title} content={content} items={ items }></CardAboutBody>
      </Card>  
    </>
  )
}

export default AboutContent