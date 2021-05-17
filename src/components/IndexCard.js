//Bulma
import {Card, Media, Content, Image, Heading} from "react-bulma-components"
import {Link} from "react-router-dom"

function IndexCard({c}){
    return(
        <Card key={c._id} className="c" >
        <Link to={`/cheese/${c._id}`}>
         <Card.Image src={c.image} alt={c.name} size="4by3" />
         <Card.Content>
             <Media>
                 <Media.Item renderAs="figure" align="left">
                 <Image
                     size="64x64"
                     alt={c.name}
                     src={c.image}
                     className="sml-cheese-img is-rounded"
                 />
                 </Media.Item>
                 <Media.Item>
                     <Heading size={6} className="index-card-header">{c.name}</Heading>
                 </Media.Item>
             </Media>
             <Content className="index-card-content">
                 Originated in {c.countryOfOrigin}
             </Content>
         </Card.Content>
       </Link>
    </Card>
    )
  } 
  
  export default IndexCard



