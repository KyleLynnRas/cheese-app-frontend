//Bulma
import {Hero} from "react-bulma-components"

function HeroComp(props){
    return(
        <Hero className="index-hero">
            <Hero.Header className="hero-title" >
                {props.title}
            </Hero.Header>
        </Hero>
    )
  } 
  
  export default HeroComp