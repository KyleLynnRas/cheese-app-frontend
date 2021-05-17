import {useState} from "react"
//Bulma
import {Button, Section} from "react-bulma-components"
//components 
import FormComp from "../components/FormComp"
import ShowCard from "../components/ShowCard"
import HeroComp from "../components/HeroComp"

function Show(props){
  const id = props.match.params.id
  const cheese = props.cheese
  const showCheese = cheese.find((c) => {
    return c._id === id
  })

  //form state 
  const [editForm, setEditForm] = useState(showCheese)

  //handleChange - form
  const handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    })
  }

  //on form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    props.updateCheese(editForm, showCheese._id)
    //redirect
    props.history.push("/")
  }

  //delete
  const removeCheese = () => {
    props.deleteCheese(showCheese._id)
    props.history.push("/")
  }

    return (
      <div className="showCheese">
        <HeroComp title={showCheese.name}/>
        <Section className="cheese-cards">
          <ShowCard showCheese={showCheese} className="show-card-container"/>
        </Section>
        <FormComp handleSubmit={handleSubmit} formState={editForm} handleChange={handleChange} title="Edit" />
        <Button onClick={removeCheese} className="is-normal delete-btn">Bye!</Button>
      </div>
    )
  } 
  
  export default Show