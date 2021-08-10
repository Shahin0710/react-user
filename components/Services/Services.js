import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { RiComputerLine } from "react-icons/ri";
import { FaMobileAlt } from "react-icons/fa";
import { MdGraphicEq } from "react-icons/md";

export default class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                        <h1 className="serviceMainTitle">MY SERVICES</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard">
                            <RiComputerLine className="serviceLogo" />
                            <h2 className="serviceName">Web Development</h2>
                            <p className="serviceDescription">
                            ml#cli_unhandled_rejections_mode
                            Failed to load jshint library
                            </p>
                        </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard">
                            <FaMobileAlt className="serviceLogo" />
                            <h2 className="serviceName">Mobile Development</h2>
                            <p className="serviceDescription">
                            ml#cli_unhandled_rejections_mode
                            Failed to load jshint library
                            </p>
                        </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard">
                            <MdGraphicEq className="serviceLogo" />
                            <h2 className="serviceName">Graphics Design</h2>
                            <p className="serviceDescription">
                            ml#cli_unhandled_rejections_mode
                            Failed to load jshint library
                            </p>
                        </div>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        )
    }
}
