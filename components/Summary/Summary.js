import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, } from 'react-bootstrap'
import { AiFillCheckCircle } from "react-icons/ai";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

export default class Summary extends Component {
    render() {
        return (
            <Fragment>
            <Container fluid={true} className="summaryBanner">
                <div className="summaryBannerOverlay">
                    <Container className="text-center">
                        <Row className="countSection">
                            <Col lg={8} md={6} sm={12}>
                                <Row className="countSection">
                                    <Col>
                                    <h1 className="countNumber">
                                    <CountUp start={0} end={100}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}delayedCall>
                                        <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                    </CountUp>
                                    </h1>
                                    
                                    <h4 className="countTitle">Total Project</h4>
                                    <hr className="bg-white"/>
                                    </Col>
                                    <Col>
                                    <h1 className="countNumber">
                                    <CountUp start={0} end={100}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}delayedCall>
                                        <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                    </CountUp>
                                    </h1>
                                    <h4 className="countTitle">Total Client</h4>
                                    <hr className="bg-white"/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <Card className="workCard">
                                    <Card.Body>
                                        <Card.Title className="cardTitle">How I Work</Card.Title>

                                        <Card.Text>
                                            <p className="cardSubTitle"><AiFillCheckCircle className="iconBullet" /> Requirement Gathering</p>
                                            <p className="cardSubTitle"><AiFillCheckCircle className="iconBullet" /> System Analysis</p>
                                            <p className="cardSubTitle"><AiFillCheckCircle className="iconBullet" /> Coding Testing</p>
                                            <p className="cardSubTitle"><AiFillCheckCircle className="iconBullet" /> Implementation</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
            </Fragment>
        )
    }
}
