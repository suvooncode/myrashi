import React, { useState  ,useRef   } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import "../assets/custome.css"
import Card from 'react-bootstrap/Card';

function Home()
{

const [tips , settips] = useState(["Relax And Stay cum"]);
const [luckynumber , setluckymember] = useState(["It is your luck"]);
const [luckycolor, setluckycolor] = useState(["Lucky Number is your luck"]);

 const Getresult = (e) => {
    console.log(e);
    const options = {
        method: 'POST',
        url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
        params: {sign: e, day: 'today'},
        headers: {
          'X-RapidAPI-Key': '6375e655a2mshfdb992cc8f81f73p145582jsnb542bfa43fe2',
          'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
          settips([response.data.description]);
          setluckymember([response.data.lucky_number]);
          setluckycolor([response.data.color]);

      }).catch(function (error) {
          console.error(error);
      });

    }
    return (
        <>
            <Container className="bgtotal">
            
                <div className="makecenter">
                <Row>
                        <Col>
                            <Form.Select aria-label="Default select example" className="" onChange={e =>Getresult(e.target.value)}>
                            <option>Select You Rashi</option>
                            <option value="aries">Aries</option>
                            <option value="taurus">Taurus</option>
                            <option value="gemini">Gemini</option>
                            <option value="cancer">Cancer</option>
                            <option value="leo">Leo</option>
                            <option value="virgo">Virgo</option>
                            <option value="libra">Libra</option>
                            <option value="scorpio">Scorpio</option>
                            <option value="saggitarius">Saggitarius</option>
                            <option value="capricorn">Capricorn</option>
                            <option value="aquarius">Aquarius</option>
                            <option value="pisces">Pisces</option>
                            </Form.Select>
                        </Col>
                </Row>
                <Row className="mt-2">
                        
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Tips & Advice</Card.Title>
                                    <Card.Text>
                                    {tips}
                                    </Card.Text>
                                
                                </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Lucky Number</Card.Title>
                                    <Card.Text>
                                    {luckynumber}
                                    </Card.Text>
                                
                                </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                            <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Lucky Color</Card.Title>
                                <Card.Text>
                                {luckycolor}
                                </Card.Text>
                            
                            </Card.Body>
                            </Card>
                            </Col>

                            
                        
                </Row>
                    
            </div>
            
            </Container>
        </>
    );

}
export default Home;