import {Link} from "react-router-dom"

function Header(props){
    return(
        <nav className="nav">
            <Link to="/">
                <div>Cheeses of the World</div>
            </Link>
        </nav>
        
        )
  } 
  
  export default Header