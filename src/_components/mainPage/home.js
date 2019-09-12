import React from 'react';
import Header from '../header/header';
import Footer from '../footer';
import Sidebar from '../sidebar';
import MostFavoritedSec from './mostVisited/mostVisited';
import RecentlyAddedSec from './mostPoints/mostPoints';
import Banner from '../banner';
import Offer  from "./offerSec";
import ButtonBases  from "./tabs/tabs";
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
