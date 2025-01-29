import { useEffect, useState } from "react"
import {Row, Col} from 'react-bootstrap'

import { SET_LOCATION } from "../../utils/mutations"
import { useMutation } from "@apollo/client"

export default function LocationForm({
        onLocationUpdate,
        currentLocation
    }){

    const [setLocation, {error, data}] = useMutation(SET_LOCATION)

    // make the limit 58, the longest city has 58 characters it's Llanfair¬pwllgwyngyll¬gogery¬chwyrn¬drobwll¬llan¬tysilio¬gogo¬goch in Wales
    const [charCount, setCharCount] = useState(0) 


    const [formState, setFormState] = useState({
        location: "",
    })

    useEffect(() =>{
        setFormState({
            location: ""
        })
    },[currentLocation])

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormState({
            ...formState,
            [name]: value
        })

        if(name === 'location'){
            setCharCount(value.length)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            if(formState.location.trim() != ""){
                await setLocation({
                    variables: {location: formState.location}
                })
            }

            if(data) {
                onLocationUpdate(
                    formState.location
                )
            }
            
        } catch (error) {
            console.log(error)
        }
        setCharCount(0)
    }


    return(
        <form onSubmit={handleSubmit}>
            <Row>
                <input
                    className="form-control"
                    name="location"
                    type="text"
                    placeholder="Where do you camp?"
                    onChange={handleChange}
                    value={formState.location}
                    maxLength={58}
                />
                <p>character count: {charCount}/58</p>
            </Row>
            <button
                type="submit"
                className="btn btn-primary mt-3"
            >
                Submit
            </button>
        </form>
    )
}