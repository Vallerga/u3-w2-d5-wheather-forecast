const initialState = {
    city: '',
    coordinateFetch: [],
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CITY_ADD':
            return {
                ...state,
                city: [action.payload]
            }
            default:
                return state
    }
}

export default mainReducer