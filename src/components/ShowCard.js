//Bulma
import {Card, Media, Content, Heading, Button} from "react-bulma-components"
//react
import {useState} from "react"

function ShowCard({showCheese}){

    //state for modal class 
    const [modal, setModal] = useState("modal")

    const modalChange = () => {
        // console.log("modal " + modal)
        modal === "is-active" ? setModal("modal") : setModal("is-active")
    }

    return(
        <Card className="show-card" >
            <Card.Image src={showCheese.image} alt={showCheese.name} className="show-card-img"/>
            {/* Modal */}
            <div className={modal}>
                <div class="modal-background"></div>
                <div class="modal-content"> 
                    <img alt={showCheese.name} size="4by3" src={showCheese.image} className="modal-img"/>
                </div>
                <Button onClick={modalChange} className="modal-close" aria-label="close"></Button>
            </div>
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
            <Button onClick={modalChange} className="is-small big-cheese">Big Cheese</Button>
        </Card>
    )
  } 
  
export default ShowCard
