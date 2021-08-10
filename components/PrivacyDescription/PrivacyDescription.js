import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class PrivacyDescription extends Component {
    render() {
        return (
            <Fragment>
                 <Container className="mt-5">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <p className="serviceDescription">
                            Well, it depends on who you ask. Broadly speaking, privacy is the right to be let alone, or freedom from interference or intrusion. Information privacy is the right to have some control over how your personal information is collected and used.
                            Ask most people these days what they think of when it comes to privacy and you’re likely to have a conversation about massive data breaches, wearable tech, social networking, targeted advertising miscues—not to mention the Snowden revelations.
                            Add to that, various cultures have widely differing views on what a person’s rights are when it comes to privacy and how it should be regulated.
                            Well, it depends on who you ask. Broadly speaking, privacy is the right to be let alone, or freedom from interference or intrusion. Information privacy is the right to have some control over how your personal information is collected and used.
                            Ask most people these days what they think of when it comes to privacy and you’re likely to have a conversation about massive data breaches, wearable tech, social networking, targeted advertising miscues—not to mention the Snowden revelations.
                            Add to that, various cultures have widely differing views on what a person’s rights are when it comes to privacy and how it should be regulated.
                            </p>
                        </Col>
                    </Row>
                </Container>  
            </Fragment>                
        )
    }
}
