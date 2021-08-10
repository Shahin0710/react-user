import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Player, BigPlayButton } from 'video-react';

export default class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
            <Container fluid={true} className="topFixedPage">
                <div className="topPageOverlay">
                    <Container className="topPageContentCourse">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <h3 className="courseFullTitle">Full Dynamic Website With Admin Panel</h3>
                                <h5 className="courseSubTitle"> Total Lecture=30</h5>
                                <h5 className="courseSubTitle"> Total Student=30</h5>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <p className="courseSubDes">I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
            <Container className="mt-5">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                    <h1 className="serviceName">Skill You Get</h1>
                        <ul>
                        <li  className="serviceDescription">Unlimited Dynamic Product Category</li>    
                        <li  className="serviceDescription">Unlimited Dynamic Product Category</li>    
                        <li  className="serviceDescription">Unlimited Dynamic Product Category</li>    
                        <li  className="serviceDescription">Unlimited Dynamic Product Category</li>    
                        <li  className="serviceDescription">Unlimited Dynamic Product Category</li>    
                        <li  className="serviceDescription">Unlimited Dynamic Product Category</li>    
                        <li  className="serviceDescription">Unlimited Dynamic Product Category</li>    
                        </ul>  
                    <Button variant="primary">More Info</Button>
                    </Col>

                    <Col lg={6} md={6} sm={12}>
                    <Player>
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                        <BigPlayButton position="center" />
                    </Player>
                    </Col>
                </Row>
            </Container>
            </Fragment>                
        )
    }
}
