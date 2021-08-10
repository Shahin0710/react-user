import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Button, Card } from 'react-bootstrap'

export default class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <Card.Img src="https://stepupit.com/ControlPanel/Images/foodbazz.png"/>                     
                        </Col>
   
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceName">Food Bazar</h2>
                            <p className="serviceDescription">FoodBazz is a cetering service app. This is one kinds of Online Food Delivery app’ FoodBazz app serve Breakfast , Lunch , Dinner , Snacks etc. By Using FoodBazz app you can order food. First time we are going to give our service in Rajshahi city.</p>
                            <ul>
                                <li className="serviceDescription">PHP cURL Admin Panel</li>
                                <li className="serviceDescription">Force Update Dialog</li>
                                <li className="serviceDescription">Featured Item In Top Slider Section</li>
                                <li className="serviceDescription">Admin can add multiple image for one product</li>
                                <li className="serviceDescription">Product availability status change option</li>
                                <li className="serviceDescription">Food Category, Wishlist an more</li>
                            </ul>
                            <Button variant="primary">Live Preview</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
            )
    }
}
