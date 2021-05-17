import {useState} from "react"
//Bulma
import {Section} from "react-bulma-components"
//components
import IndexCard from "../components/IndexCard"
import HeroComp from "../components/HeroComp"
import FormComp from "../components/FormComp"

function Index({cheese, createCheese}){
    //state formData
    const [newForm, setNewForm] = useState({
        name: "",
        image: "", 
        countryOfOrigin: "",
    })

    //handleChange for form
    const handleChange = (e) => {
        setNewForm({
            ...newForm,
            [e.target.name]: e.target.value
        })
    }

    //on form submit
    const handleSubmit = (e) => {
        e.preventDefault()
        //new cheese with form data 
        createCheese(newForm)
        //clear out form after submit
        setNewForm({
            name: "",
            image: "", 
            countryOfOrigin: "",
        })
    }

    const loaded = () => {
        return cheese.map((c) => (
            <IndexCard c={c}/>
        ))
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return(
        <div className="index-container">
            <HeroComp title="The Place to Brie for Cheese Lovers" />
            <FormComp handleSubmit={handleSubmit} formState={newForm} handleChange={handleChange} title="Add a Cheese" />
            <Section className="cheese-cards">
                {cheese ? loaded() : loading()}
            </Section>
        </div>
        ) 
} 
  
export default Index