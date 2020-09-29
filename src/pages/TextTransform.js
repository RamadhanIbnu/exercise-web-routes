import React, {useState} from 'react';
import { Container, Card, Form, Alert} from "react-bootstrap";
import '../style/TextTransform.css'

const TextTransform = () =>{
    const [text, setText] = useState("")

    const handleChange = (event) =>{
        setText(event.target.value.toUpperCase())
    }

    return(
        <Container>
            <Card>
                <Form.Group className="container-output">
                    <Form.Label className="header-output">
                        <h1>Here Your Text</h1>
                    </Form.Label>
                        <Alert variant="info" className="output-text">{text}</Alert>
                </Form.Group>
                <hr/>
                <Form.Group className="header-input">
                    <Form.Label>Input Your Text</Form.Label>
                    <Form.Control className="control" type="text" onChange={handleChange} placeholder="input your text here" />
                </Form.Group>
            </Card>
        </Container>
    )
}

export default TextTransform;