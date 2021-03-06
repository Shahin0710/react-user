import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedPage">
                <div className="topPageOverlay">
                    <Container className="topPageContent">
                        <Row>
                            <Col className="text-center">
                            <h4 className="pageTitle">{this.props.pageTitle}</h4>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
            </Fragment>                
        )
    }
}
