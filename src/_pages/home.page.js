import React from 'react';
import {Header} from '../_components/header/header';
import {Footer} from '../_components/footer/footer';
import Sidebar from '../_components/mainPage/sidebar/sidebar';
import MostFavoritedSec from '../_components/mainPage/mostFavorited/mostFavorited';
import RecentlyAddedSec from '../_components/mainPage/recentlyAdded/recentlyAdded';
import Banner from '../_components/mainPage/banner/banner';
import Offer  from "../_components/mainPage/offerSection/offerSec";
import ButtonBases  from "../_components/mainPage/categoryGrid/categoryGrid";
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
