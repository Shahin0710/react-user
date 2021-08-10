import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FaPhone, FaRegEnvelope } from "react-icons/fa";


export default class ContactService extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                        <h1 className="serviceName">Quick Connect</h1>
                        <Form>
                        <Form.Group className="mb-3">
                            <Form.Label className="serviceDescription">Name</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="serviceDescription">Email Address</Form.Label>
                            <Form.Control type="email"/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="serviceDescription">Message</Form.Label>
                            <Form.Control as="textarea" rows="3"/>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                        <h1 className="serviceName">Discus Now</h1>
                        <p className="serviceDescription">#146 West Jurain (Tulabagicha), Foridabad, Shampur <br/> Dhaka-1204</p>
                        <p className="serviceDescription"><FaRegEnvelope /> ms86.cool@gmail.com</p>
                        <p className="serviceDescription"><FaPhone /> +88 019 1563 4315</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
