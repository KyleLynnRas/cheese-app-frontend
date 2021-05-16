import {useEffect, useState} from "react"
import {Route, Switch} from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

function Main(props){
    const [cheese, setCheese] = useState(null)

    const URL = "https://cheese-app-backendkr.herokuapp.com/cheese/"

    const getCheese = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        //update cheese state 
        setCheese(data)
    }

    //create
    const createCheese = async (newCheese) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCheese)
        })
        //update cheese list 
        getCheese()
    }

    //update 
    const updateCheese = async (updatedCheese, id) => {
        console.log(id)
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedCheese),
        })
        //update cheese list 
        getCheese()
    }
 
    //delete
    const deleteCheese = async id => {
        await fetch(URL + id, {
            method: "delete", 
        })
        //update cheese list 
        getCheese()
    }

    useEffect(() => getCheese(), [])

    return(
        <main>
            <Switch>
                <Route exact path="/">
                    <Index cheese={cheese} createCheese={createCheese} />
                </Route>
                <Route path="/cheese/:id"
                    render={(routerProps) => (
                        <Show 
                            cheese={cheese}
                            updateCheese={updateCheese}
                            deleteCheese={deleteCheese}
                            {...routerProps} 
                        />
                    )}
                />
            </Switch>
        </main>
        )
  } 
  
  export default Main