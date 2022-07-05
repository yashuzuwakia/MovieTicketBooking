export const selectSeat = (seat) => {

    return {
        type: 'SELECT_SEAT',
        payload: seat
    }
}

export const bookTicket = (amount) => {
    return {
        type: 'BOOK_TICKET',
        payload: amount
    }
}

export const selectScreen = (screen) => {
    return {
        type: 'SELECT_SCREEN',
        payload: screen
    }
}

export const collectRevenue = (amount) => {
    return {
        type: 'COLLECT_REVENUE',
        payload: amount
    }
}

export const showRevenue = (amount) => {
    return {
        type: 'SHOW_REVENUE',
        payload: amount
    }
}

export const bookSeats = (screen,seat) => {
    
    return {
        type:'BOOK_SEATS',
        payload:{seat : seat,
        screen:screen}
    }
}