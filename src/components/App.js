import React from 'react'
import { connect } from 'react-redux';
import SeatArrangement from './SeatArrangement';

import Screen from './Screen';
import BookTicket from './BookTicket';
import "./App.css";


function App(props) {
  return (
    <div className="container">
      <div className="item item1">
        <h1>Movie Booking Platform</h1>
      </div>
      <div className="item">
        <Screen />
      </div>
      <div className="item">
        <SeatArrangement />
      </div>
      <div className="item">
        <BookTicket />
      </div>
    </div>
  );
}

const mapStateToProp = (state) => {
  return { seat: state.seats };
}

export default connect(mapStateToProp)(App);
