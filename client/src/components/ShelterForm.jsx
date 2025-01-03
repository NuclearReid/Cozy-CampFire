import { useState } from "react"
import { FormCheck, Row, Col } from "react-bootstrap"

import { SET_SHELTER } from "../utils/mutations"
import { useMutation } from "@apollo/client"

 export default function ShelterForm(){

    const [setShelter, {error, data: setShelterData }] = useMutation(SET_SHELTER)

    const [formState, setFormState] = useState({
        shelter: 'cowboy', // The default is cowboy because it's no shelter
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await setShelter({
                variables: { shelter: formState.shelter}
            })
        } catch (error) {
            console.log(error)
        }        
    }

  return (
    <form onSubmit={handleSubmit}>
        <Row>
            <Col className='mb-3' xs={12} md={12}>
                <label className='form-label fs-3'>
                    Type of Shelter?
                </label>
                <FormCheck
                    value={'tent'}
                    className='fs-5'
                    type="radio"
                    label="Tent"
                    name="shelter"
                    id="tent"
                    onChange={handleChange}
                    checked={formState.shelter === 'tent'}
                />
                <FormCheck
                    value={'hammock'}
                    className='fs-5'
                    type="radio"
                    label="Hammock"
                    name="shelter"
                    id="hammock"
                    onChange={handleChange}
                    checked={formState.shelter === 'hammock'}
                />
                <FormCheck
                    value={'cowboy'}
                    className='fs-5'
                    type="radio"
                    label="Cowboy"
                    name="shelter"
                    id="cowboy"
                    onChange={handleChange}
                    checked={formState.shelter === 'cowboy'} 
                />
            </Col>
        </Row>
      <button type="submit" className="btn btn-primary mt-3">Submit</button>
    </form>
  )
}