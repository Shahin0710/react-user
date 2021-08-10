import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class RefundSection extends Component {
    render() {
        return (
            <Fragment>
            <Container className="mt-5">
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <ul className="serviceDescription">
                        <li> First 30 days money back!</li>
                        <li> THIS IS NOT A BUY-AND-TRY PRODUCT</li>
                        <li>Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.</li>
                        <li>After 30 Days: There is no refund offered after the first 30 days.</li>
                        <li>The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.</li>
                        <li>Refunds will be issued for the full value of the order, but will not include shipping costs to or from the customer.</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Fragment>            
        )
    }
}
