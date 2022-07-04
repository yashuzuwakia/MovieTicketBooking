import { combineReducers } from 'redux';

const seatArrangementReducer = () => {
    return [
        {
            screen: {
                number: 1,
                seats: {
                    a: ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9"],
                    b: ["B1", "B2", "B3", "B4", "B5", "B6"],
                    c: ["C1", "C2", "C3", "C4", "C5", "C6", "C7"]
                }

            }
        }, {
            screen: {
                number: 2,
                seats: {
                    a: ["A1", "A2", "A3", "A4", "A5", "A6", "A7"],
                    b: ["B1", "B2", "B3", "B4", "B5", "B6"],
                    c: ["C1", "C2", "C3", "C4", "C5", "C6", "C7"]
                }

            }
        }, {
            screen: {
                number: 3,
                seats: {
                    a: ["A1", "A2", "A3", "A4", "A5", "A6", "A7"],
                    b: ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"],
                    c: ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9"]
                }

            }
        }]
}

const selectScreenReducer = (selectedScreen = null, action) => {
    if (action.type === 'SELECT_SCREEN') {
        return action.payload;
    }
    return selectedScreen;
}


const selectSeatReducer = (selectSeat = null, action) => {
    if (action.type === 'SELECT_SEAT') {
        if (!action.payload) {
            return "error"
        }
        return action.payload;
    }
    return selectSeat;
}

const selectedSeatReducer = (selectedSeat =[], action) => {
    if (action.type === 'SELECT_SEAT') {
        if(action.payload===0){
            return [];
        }
        selectedSeat.push(action.payload);
        let arr = [...new Set(selectedSeat)]
        return arr;
    }
    return selectedSeat;
}


const bookTicketReducer = (amount = 0, action) => {
    if (action.type === 'BOOK_TICKET') {
        return action.payload;
    }
    return amount;
}

const collectRevenueReducer = (amount = [],action) => {
if(action.type === 'COLLECT_REVENUE') {
    amount=amount+action.payload
 return action.payload;
}
return amount;
}

export default combineReducers({
    seats: seatArrangementReducer,
    selectSeat: selectSeatReducer,
    bookTicket: bookTicketReducer,
    selectScreen: selectScreenReducer,
    selectedSeat: selectedSeatReducer,
    revenue :collectRevenueReducer
})
