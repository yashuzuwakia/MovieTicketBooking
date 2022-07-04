import React from 'react';
import { connect } from 'react-redux';
import { bookTicket,selectSeat,collectRevenue } from '../actions'

const BookTicket = (props) => {

    if (!props.seats) {
        return <h1>Select A Screen</h1>
    }

    if (!props.selectSeat) {
        return <h1>Select A Seat</h1>
    }



    return (
        <div className="bookTicket">
            <h3>Select Show Number : {props.seats.number}</h3>
            <h3>Select Seats : </h3>{props.selectedSeat}
            <h3 onClick={()=>{
                let platinum=0;
                let gold=0;
                let silver=0;
                for(let i = 0; i<props.selectedSeat.length; i++) {
                    if(props.selectedSeat[i].charAt(0)==='A'){
                        platinum++;
                    }
                    if(props.selectedSeat[i].charAt(0)==='B'){
                        gold++;
                    }
                    if(props.selectedSeat[i].charAt(0)==='C'){
                        silver++;
                    }
                }
                props.bookTicket((platinum*320)+(gold*280)+(silver*240))}}>Display : </h3>
            <h3>Subtotal :Rs. {props.amount}</h3>
            <h3>Service Tax @ 14% :{(0.14*props.amount).toFixed(2)}</h3>
            <h3>Swachh Bharat Cess @0.5% :{(0.005*props.amount).toFixed(2)}</h3>
            <h3>Krishi Kalyan Cess @0.5% :{(0.005*props.amount).toFixed(2)}</h3>
            <h3>Total:{props.amount+parseFloat((0.14*props.amount).toFixed(2))+parseFloat((2*(0.005*props.amount).toFixed(2)))}</h3>
            <h3>Would you like to continue :</h3>
            <div className=''>
                <div className='finalCall' onClick={()=>{
                    props.collectRevenue(props.amount+parseFloat((0.14*props.amount).toFixed(2))+parseFloat((2*(0.005*props.amount).toFixed(2))))
                    props.selectSeat(0);
                    props.bookTicket(0);
                    alert("Your Tickets are Booked!")                      
                    }
                     }>Yes</div>
                <div className='finalCall'>No</div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
console.log(state)
    return {
        seats: state.selectScreen,
        selectSeat: state.selectSeat,
        selectedSeat: state.selectedSeat,
        amount: state.bookTicket
    };
}

export default connect(mapStateToProps, { bookTicket,selectSeat,collectRevenue })(BookTicket);