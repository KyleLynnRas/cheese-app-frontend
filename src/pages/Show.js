import {useState} from "react"

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
          <img src={showCheese.image} alt={showCheese.name} />
            <h1>{showCheese.name}</h1>
            <h2>{showCheese.countryOfOrigin}</h2>
        <button onClick={removeCheese}>Bye!</button>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={editForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
          <input 
            type="text"
            value={editForm.image}
            name="image"
            placeholder="image URL"
            onChange={handleChange}
          />
          <input 
            type="text"
            value={editForm.countryOfOrigin}
            name="countryOfOrigin"
            placeholder="country of origin"
            onChange={handleChange}
          />
          <input type="submit" value="Update Cheese" />
        </form>
      </div>
    )
  } 
  
  export default Show