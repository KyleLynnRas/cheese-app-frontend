import {Link} from "react-router-dom"
//icons
import {GiCheeseWedge} from "react-icons/gi"

function Header(props){
    return(
        <nav className="nav">
            <Link to="/">
                <GiCheeseWedge className="cheese-icon"/>
            </Link>
        </nav>
        )
  } 
  
  export default Header