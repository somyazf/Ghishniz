import React from 'react';
import Header from '../header';
import Footer from '../footer';
import MostPointSec from './mostPoints/mostPoints';
import MostVisitedSec from './mostVisited/mostVisited';
import Suggestion from './suggestions/suggestions';
import Title from './title/title';
import Banner from '../banner'
export default function Home() {
    return <>
        <Header/>
        <Banner/>
        <Title title="Most Visited"/>
        <MostPointSec/>
        <Title title="Most Visited"/>
        <MostVisitedSec/>
        <Title title="Most Visited"/>
        <Suggestion/>
        <Footer/>
    </>
}
