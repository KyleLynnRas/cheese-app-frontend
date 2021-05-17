import './App.css';
//Components 
import Header from "./components/Header"
import Main from "./components/Main"
//Bulma
import {Footer} from "react-bulma-components"


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer className="footer"/>
    </div>
  );
}

export default App;
