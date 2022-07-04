import React from 'react';
import { connect } from 'react-redux';
import { selectSeat } from '../actions';

import "./App.css";

const SeatArrangement = (props) => {

    if (!props.seats) {
        return <h1>Select A Screen</h1>
    }

    const renderA = props.seats.seats.a.map((a) => {

        return <div key={a} className="seat" onClick={() => props.selectSeat(a)}>
            {a}
        </div>
    })

    const renderB = props.seats.seats.b.map((a) => {
        return <div key={a} className="seat" onClick={() => props.selectSeat(a)}>
            {a}
        </div>
    })

    const renderC = props.seats.seats.c.map((a) => {
        return <div key={a} className="seat" onClick={() => props.selectSeat(a)}>
            {a}
        </div>
    })

    return (
        <div className="seatArrangement">
            <h3>Screen {props.seats.number}</h3>
            <div className="platinum">
                <h3>Paltinum</h3>
                <div className='flexbox-container'>
                    {renderA}
                </div>

            </div>
            <div className="gold">
                <h3>Gold</h3>
                <div className='flexbox-container' >
                    {renderB}
                </div>
            </div>
            <div className='silver' >
                <h3>Silver</h3>
                <div className='flexbox-container' >
                    {renderC}
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { seats: state.selectScreen };
}

export default connect(mapStateToProps, { selectSeat })(SeatArrangement);