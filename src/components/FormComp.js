//Bulma
import {Form, Button} from "react-bulma-components"

function FormComp(props){

    const formState = props.formState

    return(
        <form onSubmit={props.handleSubmit} >
            <Form.Field className="new-form">
                <Form.Label className="new-form-title">{props.title}</Form.Label>
                    <Form.Input
                        type="text" 
                        value={formState.name}
                        name="name"
                        placeholder="name"
                        onChange={props.handleChange}
                        className="form-input"
                    />
                    <Form.Input
                        type="text" 
                        value={formState.image}
                        name="image"
                        placeholder="image URL"
                        onChange={props.handleChange}
                        className="form-input"
                    />
                    <Form.Input
                        type="text" 
                        value={formState.countryOfOrigin}
                        name="countryOfOrigin"
                        placeholder="country of origin"
                        onChange={props.handleChange}
                        className="form-input"
                    />
                <Button type="submit" className="is-normal add-submit">Submit</Button>
            </Form.Field>
        </form>
        )
  } 
  
export default FormComp

