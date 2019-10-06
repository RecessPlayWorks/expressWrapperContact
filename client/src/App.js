import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import {Router} from '@reach/router';

import Header from './subcomponents/Header.js';
import LandingMain from './MainComps/LandingMain';
import AboutMain from './MainComps/AboutMain';
import MapMain from './MainComps/MapMain';
import ContactMain from './MainComps/ContactMain';
import PaymentMain from './MainComps/PaymentMain';
import EventsMain from './MainComps/EventsMain';
import MembershipMain from './MainComps/MembershipMain';

import './App.css';
import MailForm from './subcomponents/MailForm';

const StyledApp = styled.div`
  background: #F2EEEA;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 8vh 92vh;
  overflow: hidden;
  & main {
    grid-row: 2;
    grid-column: 1;
    display: grid;
    grid-template-columns:34vw 66vw;
    grid-template-rows: 50vh 42vh;
    .section-right {
      grid-row: 1/3;
      grid-column: 2;
      display: grid;
      border: 1px solid #222;
      border-width: 0px;
      border-left-width: 1px;
    }
    .section-left-bot {
      padding: 10%;
      grid-row: 2/3;
      grid-column: 1;
      display: grid;
    }    
  }
`;

function initializedAnalytics() {
  const TrackingID = "UA-148764400-1";
  ReactGA.initialize(`${TrackingID}`);
  ReactGA.pageview("/Homepage");
}


function App() {
  //TODO: remove app class?
  initializedAnalytics();
  return (
    <StyledApp className="app-js-div App">
      <Header/>
      <Router>
        <LandingMain path="/" />
        <AboutMain path="/about" />
        <MapMain path="/map" />
        <ContactMain path="/contact" />
        <PaymentMain path="/payment" />
        <EventsMain path="/events" />
        <MembershipMain path="/membership" />

      </Router>
       <h1>Contact Us</h1>
       <MailForm/>
      
    </StyledApp>
  );
}

export default App;
