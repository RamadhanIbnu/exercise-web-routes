import React, {useState} from 'react';
import swal from '@sweetalert/with-react'
// import date picker
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import bootstrap
import { Form,Button,Container,Card,Row,Col } from "react-bootstrap";
// custom style
import "../style/Register.css"


    

const Register = () =>{
    // const [startDate, setStartDate] = useState();
    // console.log(startDate)
    const [dataName, setDataName] = useState("");
    const [dataEmail, setDataEmail] = useState("");
    const [dataPassword, setDataPassword] = useState("");
    const [dataAddress, setDataAddress] = useState("");
    const [dataBirthDate, setDataBirthDate] = useState();
    

    const checkBox = [
      {
        type:"checkbox",
        label:"Coding",
        name:"formHorizontalCheckbox",
        id:"formHorizontalCheckbox1",
      },
      {
        type:"checkbox",
        label:"Design",
        name:"formHorizontalCheckbox",
        id:"formHorizontalCheckbox2",
      },
      {
        type:"checkbox",
        label:"Gaming",
        name:"formHorizontalCheckbox",
        id:"formHorizontalCheckbox3",
      }
  ]
    // const handleChange = (event)=>{
    //     setDataName(event.target.value);
    // }

    const handleSubmit = (event)=>{
        swal(
                <div>
                  <h1>Data anda :</h1>
                  <p>Name : {dataName}</p>
                  <p>Email: {dataEmail}</p>
                  <p>Password: {dataPassword}</p>
                  <p>Address: {dataAddress}</p>
                  <p>Birth Date: {dataBirthDate}</p>
                </div> 
            )
        event.preventDefault();
    }

    

    return (
      <Container className="container-form">
        <Card className="container-card">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={dataName} onChange={event => setDataName(event.target.value)} placeholder="Enter Name" />
              {/* {console.log(dataName)} */}
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={dataEmail} onChange={event => setDataEmail(event.target.value)} />
              {/* {console.log(dataEmail)} */}
              <Form.Text className="text-muted">
                Relax your e-mail is safe with me.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={dataPassword} onChange={event => setDataPassword(event.target.value)} />
            </Form.Group>

            <Form.Group controlId="formControlTextarea">
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" rows={3} value={dataAddress} onChange={event => setDataAddress(event.target.value)} />
            </Form.Group>

            <Form.Group controlId="formPickDate">
              <Form.Label>Birth Date</Form.Label>
              {/* <div className="date">
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date) }  />
                
              </div> */}
              <Form.Control type="date" placeholder="Birth Date" value={dataBirthDate} onChange={event => setDataBirthDate(event.target.value)} />
            </Form.Group>

            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Gender
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="Laki-Laki"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="Perempuan"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                </Col>
              </Form.Group>
            </fieldset>

            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Skill
                </Form.Label>
                <Col sm={10}>
                  {/* <Form.Check
                    type="checkbox"
                    label="Coding"
                    name="formHorizontalCheckbox"
                    id="formHorizontalCheckbox1"
                  /> */}
                  {checkBox.map((item, index) =>(
                    <div key={index}>
                      <Form.Check
                        type={item.type}
                        label={item.label}
                        name={item.name}
                        id={item.id}
                      />
                    </div>
                  ))}
                </Col>
              </Form.Group>
            </fieldset>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
    );
}

export default Register;