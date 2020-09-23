import React, {useState} from 'react';
import { Container, Card, Form, Button } from "react-bootstrap";
import '../style/CalculatorBMI.css';
import swal from '@sweetalert/with-react'

const Calculator = () =>{

    const [weight, setWeight] = useState();
    const [height, setHeight] = useState()

    const handleSubmit = (event)=>{
        swal(
                <div>
                  <h1>Data anda :</h1>
                  <p>Your BMI: {weight/(height*height)}</p>
                </div> 
            )
        event.preventDefault();
    }

    return(
        <Container>
            <Card className="card-container" >
                <h1>Check Your Body Mass Index</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Weight (Kg)</Form.Label>
                        <Form.Control type="number" className="input-weight" onChange={(event)=>setWeight(event.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Height (m)</Form.Label>
                        <Form.Control type="number" className="input-weight" onChange={(event)=>setHeight(event.target.value)}></Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit"> Submit </Button>
                </Form>
            </Card>
        </Container>
    )
}

export default Calculator;