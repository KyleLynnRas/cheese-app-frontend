//Bulma
import {Card, Media, Content, Heading} from "react-bulma-components"

function ShowCard({showCheese}){
    return(
        <Card className="show-card" >
         <Card.Image src={showCheese.image} alt={showCheese.name}  />
         <Card.Content>
             <Media>
                 <Media.Item>
                     <Heading className="showcard-header">{showCheese.name}</Heading>
                 </Media.Item>
             </Media>
             <Content className="show-card-content">
                 Originated in {showCheese.countryOfOrigin}
             </Content>
         </Card.Content>
    </Card>
    )
  } 
  
export default ShowCard
