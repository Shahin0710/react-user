import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default class TopBanner extends Component {
    render() {
        return (
        <Fragment>
            <Container fluid={true} className="topFixedBanner">
                <div className="topBannerOverlay">
                    <Container className="topContent">
                        <Row>
                            <Col className="text-center">
                            <h1 className="topTitle">SOFTWARE DEVELOPER</h1>
                            <h4 className="topSubTitle">Web Application</h4>
                            <Button variant="primary">More Info</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </Fragment>
        )
    }
}
