import React from 'react';
import './App.css';
import { selectScreen, selectSeat, bookTicket } from '../actions'
import { connect } from 'react-redux';

const Screen = (props) => {

    const render = props.screen.map((screen) => {
        return (<div className="screen" key={screen.screen.number} onClick={() => {
            props.selectSeat(0);
            props.bookTicket(0);
            props.selectScreen(screen.screen)}}>
            <h1>Screen {screen.screen.number}</h1>

        </div>)
    })

    return (<div >
        {render}
    </div>)
};

const mapStateToProp = (state) => {
    return { screen: state.seats };
}

export default connect(mapStateToProp, { selectScreen,selectSeat,bookTicket })(Screen);
