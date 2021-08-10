import React, { Component, Fragment } from 'react';
import TopBanner from "../components/TopBanner/TopBanner";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Services from "../components/Services/Services";
import Analysis from "../components/Analysis/Analysis";
import Summary from "../components/Summary/Summary";
import RecentProjects from "../components/RecentProjects/RecentProjects";
import Courses from "../components/Courses/Courses";
import Video from "../components/Video/Video";
import ClientReview from "../components/ClientReview/ClientReview";
import Footer from "../components/Footer/Footer";

export default class HomePage extends Component {
        
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopBanner />
                <TopNavigation title="Home"/>
                <Services />
                <Analysis />
                <Summary />
                <RecentProjects />
                <Courses />
                <Video />
                <ClientReview />
                <Footer />
            </Fragment>
            )
    }
}
