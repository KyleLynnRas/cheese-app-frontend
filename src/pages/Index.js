import {useState} from "react"
import {Link} from "react-router-dom"

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
            <div key={c._id} className="c">
                <Link to={`/cheese/${c._id}`}><h1>{c.name}</h1></Link>
                <img src={c.image} alt={c.name} />
                <h3>{c.countryOfOrigin}</h3>
            </div>
        ))
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return(
        <section>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={newForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                 <input 
                    type="text" 
                    value={newForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                 <input 
                    type="text" 
                    value={newForm.countryOfOrigin}
                    name="countryOfOrigin"
                    placeholder="country of origin"
                    onChange={handleChange}
                />
                <input type="submit" value="Add a cheese" />
            </form>
            {cheese ? loaded() : loading()}
        </section>
        ) 
} 
  
export default Index