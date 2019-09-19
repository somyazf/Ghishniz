import React from 'react';
import {Header} from '../components/header/header';
import {Footer} from '../components/footer/footer';
import Sidebar from '../components/mainPage/sidebar/sidebar';
import MostFavoritedSec from '../components/mainPage/mostFavorited/mostFavorited';
import RecentlyAddedSec from '../components/mainPage/recentlyAdded/recentlyAdded';
import Banner from '../components/mainPage/banner/banner';
import Offer  from "../components/mainPage/offerSection/offerSec";
import ButtonBases  from "../components/mainPage/categoryGrid/categoryGrid";
import { Col, Row, Container, TabContainer} from 'react-bootstrap';

export default function Home() {
    return <>
        <Header/>
        <Banner/>
        <Container fluid className="mainContainer">
            <ButtonBases/>
            <Row>
                <Col sm={3}>
                    <Sidebar/>            
                </Col>
                <Col sm={9}>
                    <RecentlyAddedSec className="recentlyAddedSec"/>
                    <Offer className="offerSec"/>
                    <MostFavoritedSec/>            
                </Col>
            </Row>
        </Container>
        <Footer/>
    </>
}
