import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class AllProjects extends Component {
    render() {
        return (
            <Fragment>
        <Container className="text-center mt-5">
                    <Row>
                        
                        <Col sm={12} md={6} lg={4} className="p-2">
                        <Card className="projectCard">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                        <Card.Body>
                            <Card.Title className="projectCardTitle">Card Title</Card.Title>
                            <Card.Text className="projectCardDes">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary"><Link className="link-style" to="/ProjectDetails">Details</Link></Button>
                        </Card.Body>
                        </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="p-2">
                        <Card className="projectCard">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                        <Card.Body>
                            <Card.Title className="projectCardTitle">Card Title</Card.Title>
                            <Card.Text className="projectCardDes">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary"><Link className="link-style" to="/ProjectDetails">Details</Link></Button>
                        </Card.Body>
                        </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="p-2">
                        <Card className="projectCard">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                        <Card.Body>
                            <Card.Title className="projectCardTitle">Card Title</Card.Title>
                            <Card.Text className="projectCardDes">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary"><Link className="link-style" to="/ProjectDetails">Details</Link></Button>
                        </Card.Body>
                        </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="p-2">
                        <Card className="projectCard">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                        <Card.Body>
                            <Card.Title className="projectCardTitle">Card Title</Card.Title>
                            <Card.Text className="projectCardDes">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary"><Link className="link-style" to="/ProjectDetails">Details</Link></Button>
                        </Card.Body>
                        </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="p-2">
                        <Card className="projectCard">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                        <Card.Body>
                            <Card.Title className="projectCardTitle">Card Title</Card.Title>
                            <Card.Text className="projectCardDes">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary"><Link className="link-style" to="/ProjectDetails">Details</Link></Button>
                        </Card.Body>
                        </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="p-2">
                        <Card className="projectCard">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                        <Card.Body>
                            <Card.Title className="projectCardTitle">Card Title</Card.Title>
                            <Card.Text className="projectCardDes">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary"><Link className="link-style" to="/ProjectDetails">Details</Link></Button>
                        </Card.Body>
                        </Card>
                        </Col>
                        
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
