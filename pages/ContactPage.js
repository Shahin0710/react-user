import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Footer from '../components/Footer/Footer'
import ContactService from '../components/ContactSection/ContactService'

export default class ContactPage extends Component {
    
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Contact"/>
                <PageTop pageTitle="Contact" />
                <ContactService />
                <Footer />
            </Fragment>
        )
    }
}
